'use strict';

const express = require('express');
const categoryRouter = express.Router();

const Categories = require('../models/categories-model')
const categories = new Categories();

// this will grab all categories
categoryRouter.get('/categories', handleGet);

// this will grab a single category by id
categoryRouter.get('/categories/:categoryId', handleGet);

function handleGet(request, response, next) {
  let filter = {};
  if (request.params.categoryId) {
    filter.id = request.params.categoryId;
  }

  categories.get(filter);
    .then(data => {
      response.send(data);
    })
    .catch(error =>  {
      console.error(error);
      response.send(error);
    })
}

// function handlePost(request, response)
module.exports = categoryRouter;