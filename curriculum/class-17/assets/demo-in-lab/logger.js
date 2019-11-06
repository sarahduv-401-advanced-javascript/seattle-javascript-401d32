'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {
  console.log('logger has connected');
});

client.on('data', (data) => {
  let payload = JSON.parse(data);
  console.log(payload);
});

client.on('close', function() {
  console.log('Connection closed');
});
