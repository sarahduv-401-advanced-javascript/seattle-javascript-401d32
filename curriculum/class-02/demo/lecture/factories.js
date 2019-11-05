'use strict';

//factories are just functions that explicitly return objects

const Message = function (text) {
  const message = {};
  message.text = text;
  message.createdAt = new Date();
  // Notice we are not using es6 syntax
  message.reverse = function () {
    return this.message.splt('').reverse().join('');
  }
  return message;
}

const mySweetMessage = Message('My super sweet message');

console.log(mySweetMessage);
console.log(mySweetMessage.reverse());

