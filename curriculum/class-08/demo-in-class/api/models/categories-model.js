'use strict';

// for the lab you will also have a categories-schema
// require mongoose schema
// this.schema = mongooseSchema will go in the constructor below for lab

const uuid = require('uuid/v4');

class Categories {
  constructor() {
    this.data = {
      [uuid()]: { name: 'Jacob', description: 'Jacob is so cool' }
    }
  }

  get(filter) {
    // search this.data using filter
    const result = this.data[filter.id];
    if (result) {
      return Promise.resolve(result);
    }
    return Promise.resolve([this.data]);
  }

  create(entry) {
    // add a new entry to this.data
  }
}

module.exports = Categories;