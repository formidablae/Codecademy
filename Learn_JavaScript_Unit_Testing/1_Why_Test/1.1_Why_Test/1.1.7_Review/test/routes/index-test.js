const { assert } = require('chai');
const request = require('supertest');
const { jsdom } = require('jsdom');

const app = require('../../app');
const { mongoose, databaseUrl, options } = require('../../database');
const Order = require('../../models/order');
const { port } = require('../../server.config').test;

const PORT = process.env.PORT || port;

const parseTextFromHTML = (htmlAsString, selector) => {
  return jsdom(htmlAsString).querySelector(selector).textContent;
};

describe('Routes', () => {
  let server;

  beforeEach('Start server', async () => {
    await mongoose.connect(databaseUrl, options);
    await mongoose.connection.db.dropDatabase();
    server = await app.listen(PORT);
  });

  afterEach('Drop database and close server', async () => {
    await mongoose.disconnect();
    await server.close();
  });

  describe('GET /', () => {
    describe('when the Order is new', () => {
      it('renders a blank Order', async () => {
        const response = await request(server).get('/');

        assert.equal(response.status, 200);
      });
    });

    describe('when the Order already exists', () => {
      it('renders the name', async () => {
        const name = 'Hungry User'
        const order = await Order.create({ name })

        const response = await request(server).get('/');

        assert.equal(response.status, 200);
        assert.include(parseTextFromHTML(response.text, '#deliver-to'), name);
      });

      it('renders the cake type', async () => {
        const cakeType = 'Whole wheat'
        const order = await Order.create({ cakeType })

        const response = await request(server).get('/');

        assert.equal(response.status, 200);
        assert.include(parseTextFromHTML(response.text, '#cake-type'), cakeType);
      });
    });
  });

  describe('POST /place-order', () => {
    /*
    it('rejects an empty name', async () => {
      const name = 'original name';
      const emptyName = '';
      const order = await Order.create({ name: 'original name' });
      const response = await request(server)
        .post('/place-order')
        .type('form')
        .send({ name: emptyName });

      assert.equal(response.status, 400);
      assert.include(parseTextFromHTML(response.text, 'body'), 'name is required');
      const reloadedOrder = await Order.findOne();
      assert.equal(reloadedOrder.name, name, 'Order name is not overwritten');
    });
    */
    it('redirects to the index', async () => {
      const response = await request(server)
        .post('/place-order')
        .type('form');

      assert.equal(response.status, 302);
      assert.equal(response.headers.location, '/');
    });

    describe('when the Order is new', () => {
      it('sets the name on the order', async () => {
        const name = 'Inquisitive User';

        const response = await request(server)
          .post('/place-order')
          .type('form')
          .send({ name })

        assert.equal(response.status, 302);
        //assert.include(parseTextFromHTML(response.text, '#deliver-to'), name);
        const order = await Order.findOne();
        assert.equal(order.name, name);
      });

      it('creates an order with the selected Cake Type', async () => {
        const cakeType = 'Whole wheat';

        const response = await request(server)
          .post('/place-order')
          .type('form')
          .send({ cakeType });

        const order = await Order.findOne({});
        assert.equal(order.cakeType, cakeType);
      });

      it('creates an order with the selected fillings', async () => {
        const fillings = ['Chocolate chips', 'Sprinkles'];

        const response = await request(server)
          .post('/place-order')
          .type('form')
          .send({ fillings });

        const order = await Order.findOne({});
        assert.deepEqual(order.fillings.toObject(), fillings);
      });

      it('creates an order with the selected size', async () => {
        const size = '6';

        const response = await request(server)
          .post('/place-order')
          .type('form')
          .send({ size });

        const order = await Order.findOne({});
        assert.strictEqual(order.size, size);
      });
    });

    describe('when the Order already exists', () => {
      it('updates the name on the order', async () => {
        const initialName = 'Inquisitive User';
        const updatedName = 'Anxious User';

        await request(server)
          .post('/place-order')
          .type('form')
          .send({ name: initialName });

        const response = await request(server)
          .post('/place-order')
          .type('form')
          .send({ name: updatedName });

        assert.equal(response.status, 302);
        //assert.include(response.text, updatedName);
        //assert.notInclude(response.text, initialName);
        const order = await Order.findOne();
        assert.equal(order.name, updatedName);
      });

      it('updates the order with the selected Cake Type', async () => {
        const cakeType = 'Whole wheat';
        await Order.create({ cakeType: 'Not Whole wheat' });

        const response = await request(server)
          .post('/place-order')
          .type('form')
          .send({ cakeType });

        const order = await Order.findOne({});
        assert.equal(order.cakeType, cakeType);
      });

      it('updates the order with the selected fillings', async () => {
        const first = ['Bacon', 'Banana'];
        const second = ['Strawberries', 'Blueberries'];
        await Order.create({ fillings: first });

        const response = await request(server)
          .post('/place-order')
          .type('form')
          .send({ fillings: second });

        const order = await Order.findOne({});
        assert.deepEqual(order.fillings.toObject(), second);
      });

      it('updates the order with the selected size', async () => {
        const oldSize = '5';
        const newSize = '4';
        await Order.create({ size: oldSize });

        const response = await request(server)
          .post('/place-order')
          .type('form')
          .send({ size: newSize });

        const order = await Order.findOne({});
        assert.strictEqual(order.size, newSize);
      });
    });
  });
});
