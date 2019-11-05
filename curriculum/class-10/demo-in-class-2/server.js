'use strict';

const express = require('express');
const mongoose = require('mongoose');

const categories = require('./categories');
const products = require('./products');
const app = express();
app.use(express.json());

mongoose.connect('mongo://localhost:27017/class10', {
  useNewUrlParser: true
});

app.get('/categories', async (request, response) => {
  const data = await categories.find({});
  response.send(data);
});

app.post('/categories', async (request, response) => {
  const newCategory = new categories(request.body);
  const data = await newCategory.save();
  response.send(data);
});

app.get('/products', async () => {
  const data = await products.find({});
  response.send(data);
});

app.post('/products', async () => {
  const newProduct = new products(request.body);
  const data = await newProduct.save();
  response.send(data);
});

app.list(3000, () => console.log('app is running'))

