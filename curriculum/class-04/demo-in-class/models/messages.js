'use strict';

const uuid = require('uuid/v4');

const schema = {
  id: {type: String, required: true},
  text: {type: String, required: true},
  createdAt: {type: String, required: true},
  updatedAt: {type: String, required: true}
}

class Messages {
  constructor() {
    this.schema = schema;
    this.data = [];
  }

  get(id) {
    let response = this.data;
    if(id) {
      response = response.filter((message) => message.id == id)  
    }
    return response;
  }

  create() { 
    let newMessage = this.sanitize(record);
    if (newMessage.id) {
      this.data.push(record);
    }
    return record;
  }

  update() {

  }

  delete() {

  }

  // used to run a check on your data to see if you can modify it
  sanitize(entry) {
    // check the type for keys
    let valid = true;
    let record = {};
    
    // make sure our output matches the schema, without putting too much effort on the user
    Object.keys(this.schema).forEach(field => {
      if(this.schema[field].required) {
        if (entry[field]) {
          record[field] = entry[field];
      } else {
        if (field === 'id') {
          record.id = uuid();
        } else if (field === 'createdAt') {
          record.createdAt = new Date();
        } else if (field === 'updatedAt') {
          record.updatedAt = new Date();
        } else {
          valid = false;
        }
      }
    });
    return valid ? record : undefined;
  }
}

module.exports = Messages;