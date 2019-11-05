'use strict';
const messagesSchema = require('./message-schema')
;

class Messages {
  constructor() {
    this.schema = messagesSchema;
  }

  get() {
    return this.schema.find() //this will be a promise
  }

  create() {
    const newMessage = new Messages({text: "my new message"});
    return newMessage.save() //promise below?
    // move create and get functions to this class from index
  }
}