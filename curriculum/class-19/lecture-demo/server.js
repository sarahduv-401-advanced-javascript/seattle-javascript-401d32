'use strict';

// create a connection with clients
const io = require('socket.io')(3001);

io.on('connection', (socket) => {
  console.log('core connection', socket.id);
  socket.on('speak', (payload) => {
    // this emits to all sockets
    io.emit('message', payload);
  });
  // when a socket disconnects, it will log the id
  socket.on('disconnect', () => {
    console.log('disconnected', socket.id)
  });
});

// utilize the namespace feature + rooms
// creates specific server endpoints, with opt in channels (codefellows is the channel here) 

const school = io.of('/school');
// when school is connected, the below will happen
school.on('connection', (socket) => {
  console.log('school connection', socket.id)

  socket.on('speak', (payload) => {
    school.emit('message', payload);
  });
  // on the event of join, a room will need to be passed in as an argument
  socket.on('join', (room) => {
    socket.join(room);
  });
  // this correlates to the test event in logger.js
  socket.on('codefellows', (payload) => {
    school.to('codefellows').emit('channel', payload);
  });
});
