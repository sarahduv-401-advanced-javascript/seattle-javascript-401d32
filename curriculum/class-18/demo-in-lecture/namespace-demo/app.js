'use strict';

const io = require('socket.io-client');
const client = io.connect('http://localhost:3001');
const schoool = io.connect('http://localhost:3001/school');

const faker = require('faker');

client.emit('speak', faker.hacker.phrase());
school.emit('school-speak', faker.hacker.phrase());

