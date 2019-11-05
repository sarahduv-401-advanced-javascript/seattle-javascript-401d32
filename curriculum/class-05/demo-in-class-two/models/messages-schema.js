'use strict';

// this is the basic form for mongoose models

const mongoose = require('mongoose');

// mongoose will automatically give you an id. --> _id

const messages = mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, required: true, default: new Date() }, // default will enter a date if one is not provided
  updatedAt: { type: Date, required: true, default: new Date() }, // default will enter a date if one is not provided
});

message.post('find', function(record) {
  // record.text = record.text.toUpperCase();
})

message.post('save', function(record) {
  // record.text = record.text.toUpperCase();
})

const model = mongoose.model(name: 'messages', messages)

module.exports = model;