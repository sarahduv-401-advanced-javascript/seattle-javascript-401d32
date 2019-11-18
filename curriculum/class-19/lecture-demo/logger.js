'use strict';

const io = require('socket.io-client');

const core = io.connect('http://localhost:3001');
const school = io.connect('http://localhost:3001/school');

// this message event correlates to the message event in server.js for the respective connections
core.on('message', (payload) => {
  console.log(payload);
});
school.on('message', (payload) => {
  console.log(payload);
});
// the join event below correlates to the join event in server.js belonging to school
school.emit('join', 'codefellows');
// the test event below is from server.js
school.emit('channel', (payload) => {
  console.log('test event from codefellows', payload);
});