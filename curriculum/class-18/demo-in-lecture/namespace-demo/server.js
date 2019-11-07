'use strict';

const io = require('socket.io')(3000);

// Core Demo -- basic operations
io.on('connection', (socket) => {
  console.log('CORE', socket.id);
  socket.on('speak', (payload) => {
    io.emit('message', payload);
  });
});

const school = io.of('/school');
school.on('connection', (socket) => {
  console.log('SCHOOL', socket.id);
  socket.on('school-speak', (payload) => {
    school.emit('message', payload);
  });
});