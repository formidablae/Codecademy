const Order = require('../../models/order');
const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');

describe('Order', () => {
  beforeEach(async () => {
    await mongoose.connect(databaseUrl, options);
    await mongoose.connection.db.dropDatabase();
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  describe('.updateOrCreate', () => {
    describe('when a record already exists', () =>{
      it('updates the record', async () => {
        const partialOrder = {
          name: 'Regular Joe',
          cakeType: 'Plain',
          size: '2',
        };
        const update = ['Apple', 'Bacon', 'Chocolate Chips'];
        const existingOrder = await Order.create(partialOrder);

        const updatedOrder = await Order.updateOrCreate({fillings: update});

        const allOrders = await Order.find({});
        assert.equal(allOrders.length, 1);
        // toObject resolves issues with mongoose metadata in arrays
        assert.deepEqual(updatedOrder.fillings.toObject(), update);
        // check remaining fields
        assert.include(updatedOrder, partialOrder);
      });
    });

    describe('when a record does not exist', () =>{
      it('creates the record', async () => {
        let healthyOrder = {
          name: 'Healthy Person',
          cakeType: 'Whole Wheat',
          fillings: ['Macadamia Nuts'],
          size: '1',
        }

        const order = await Order.updateOrCreate(healthyOrder);

        const allOrders = await Order.find({});
        assert.equal(allOrders.length, 1);
        assert.deepEqual(allOrders[0].fillings.toObject(), healthyOrder.fillings);
        delete healthyOrder.fillings;
        assert.include(allOrders[0], healthyOrder);
      });
    });
  });

  describe('#cakeType', () => {
    it('is a String', () => {
      const nameAsAnInt = 1;

      const order = new Order({ cakeType: nameAsAnInt });

      assert.strictEqual(order.cakeType, nameAsAnInt.toString());
    });
  });

  describe('#name', () => {
    it('is a String', () => {
      const nameAsAnInt = 1;

      const order = new Order({ name: nameAsAnInt });

      assert.strictEqual(order.name, nameAsAnInt.toString());
    });
  });

  describe('#fillings', () => {
    it('is an Array', () => {
      const fillings = ['Apple', 'Bacon'];

      const order = new Order({fillings});

      // toObject resolves issues with mongoose metadata
      assert.deepEqual(order.fillings.toObject(), fillings);
    });
  });

  describe('#size', () => {
    it('is a String', () => {
      const sizeAsAnInt = 3;

      const order = new Order({size: sizeAsAnInt});

      assert.strictEqual(order.size, sizeAsAnInt.toString());
    });
  });
});
