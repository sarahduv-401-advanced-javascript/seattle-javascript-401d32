'use strict';

const mongoose = require('mongoose');
require('./products');

const categories = mongoose.Schema({
  name: String,
  description: String,
}, {
  toObject: { virutal: true }
}, {
  toJSON: { virutal: true }
});

categories.virtual('products', {
  ref: 'products', // same name as the specified schema
  localField: 'name', // using the name property from above schema
  foreignField: 'category', // this is category from products
  justOne: false, // we want to return all that match, not just one 
});

categories.pre('find', function() {
  try {
    this.populate('products');
  } catch (e) {
    console.log('find categories error');
  }
});

module.exports = mongoose.model('categories', categories);