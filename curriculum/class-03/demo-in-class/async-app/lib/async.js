'use strict';

const handler = (err, data) => {
  if (err) {
    console.warn(err);
    return;
  }
  console.log(data);
}

const doCallback = (args, cb) => {
  setTimeout( () => {
    cb(null, args);
  }, 1000);
}

const doPromise = (args) => {
  return new Promise((resolve, reject) => {
    // if (args) {
    //   resolve(args)
    // } else {
    //   reject('oh no');
    // }
    // can be condensed to the below
    args ? resolve(args) : reject('oh no');
  });
};

module.exports = {
  handler,
  doCallback,
  doPromise
}