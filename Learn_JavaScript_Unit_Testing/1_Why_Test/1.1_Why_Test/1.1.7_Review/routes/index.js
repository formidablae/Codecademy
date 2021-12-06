const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Order = require('../models/order');

router.get('/', async (req, res) => {
  const order = await Order.findOne({});

  res.render('index', { order });
});

// Change the line below to fix the regression
router.post('/clear-order', async (req, res) => {
  await Order.deleteOne({});
  res.redirect('/');
});

router.post('/place-order', async (req, res) => {
  const { name, cakeType, fillings, size, pickUp } = req.body;

  const order = await Order.updateOrCreate({ name, cakeType, fillings, size })
  res.redirect('/');
});

module.exports = router;
