'use strict';

const io = require('socket.io-client');
const client = io.connect('http://localhost:3001');
const school = io.connect('http://localhost:3001/school');

// this speak event correlates with the other speak event in server.js
client.emit('speak', 'here is my core connection');
school.emit('speak', 'here is my school event');
// test event below is relating to both logger and server js
school.emit('codefellows', 'here is my codefellows event');