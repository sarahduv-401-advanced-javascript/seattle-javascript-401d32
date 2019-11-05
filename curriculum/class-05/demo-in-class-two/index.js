'use strict';

// npm install --save mongoose

const mongoose = require('mongoose');
const MONGOOSE_URI = 'mondodb://localhost:27017/class05'

mongoose.connect(MONGOOSE_URI, {
  // the below are required for preventing errors
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.Schema.Find()

const Messages = require('./models/messages-schema');

const handleCreate = () => {
  const newMessage = new Messages({text: "my new message"})
  newMessage.save();
    .then(message => console.log(message))
    .catch(err => console.log('oops', err));
}

const handleFetch = () => {
  Messages.find({}) // goes through the schema to find
    .then(allMessages => console.log(allMessages))
    .catch(err => console.log('oops', err));
}

// handleCreate();
handleFetch();



