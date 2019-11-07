'use strict';

// CLIENT
const io = require('socket.io-client');
const client = io.connect('http://localhost:3001');
const schoool = io.connect('http://localhost:3001/school');


client.on('message', (payload) => {
  console.log('heard', payload);
});

school.on('message-school', (payload) => {
  console.log('heard', payload);
});

