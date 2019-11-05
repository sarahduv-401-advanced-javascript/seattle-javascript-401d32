'use strict';

const longTask = (data) => new Promise((resolve, reject) => {
  // specify conditions that satisfy pass / fail
  if (!data) {
    reject(errorFirst('Uh oh'));
  } else {
    resolve('everything thing passed ', data);
  }
});

longTask(true)
  .then(data => {
    console.log(data))
    return data
  })
  .then(newData => console.log(newData))
  .catch(e => console.warn(e));

const util = require('util');

// util.promisify(function) => returns that function as a promise

const someFunction = (word, cb) => {
  cb(null, word);
}

const promisify => (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      };
    });
  });
};

let promiseSomeFunction = promisify(someFunction);

promise.Function('My awesome promise function')
  .then(data => console.log(data))
  .catch(console.warn);