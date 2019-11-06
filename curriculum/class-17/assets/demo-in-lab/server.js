'use strict';

// you need to first connect to the server, and then connect to the app

// The TCP connection library: net
const net = require('net');

// As the host server 
const server = net.createServer();
const port = process.env.port || 3001;

const socketPool ={};

server.listen(port, (socket) => `tcp server is up on port: ${port}`);

server.on('connection', (socket) => {
  const id = `Socket-${uuid()}`;
  socketPool[id] = socket;
  console.log(`someone connected, socket info: ${id}`);
})