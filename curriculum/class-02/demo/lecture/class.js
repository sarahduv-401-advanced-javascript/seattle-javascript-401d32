'use strict';

// Classes are just a different syntax, acheiving the same goal as a constructor.

class Message {
  constructor(text) {
    this.text = text;
    this.createdAt = new Date();
  }

  static messagelog() {
    
  }

  reverseMe() {
    return this.text.split('').reverse().join('');
  }
};

const classMessage = new Message('this is a test message');

console.log(classMessage);
console.log(classMessage.reverseMe());