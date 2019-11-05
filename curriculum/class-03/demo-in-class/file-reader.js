'use strict';

const fs = require('fs');

const showFile = (err, data) => {
  if (err) {
    throw errl
  } else {
    console.log(data);
  }
}

const reader = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data.toString());
    }
  });
}

reader('./data/text.txt', showFile)

const util = require('util');

const readFilePromise = util.promisify();