'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: String,
  category: String,
});

module.exports = mongoose.model('products', products)