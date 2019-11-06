'use strict';

// you need to first connect to the server, and then connect to the app

// The TCP connection library: net
const net = require('net');

// As the host server 
const server = net.createServer();
const port = process.env.port || 3001;

server.listen(port, (socket) => `tcp server is up on port: ${port}`);


let allowedEvents = ['create','read','update','delete','error','attack'];
let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('close', () => {
    delete socketPool[id];
  });
});

let dispatchEvent = (buffer) => {
  let text = buffer.toString().trim();
  let [event,payload] = text.split(/\s+(.*)/); // a space one or more times, .* everything

  // Push to the pool that matches the event name
  if ( allowedEvents.includes(event) ) {

    let eventPayload = {event,payload};

    for (let socket in socketPool) {
      socketPool[socket].write(JSON.stringify(eventPayload));
    }
  }
  else {
    console.log(`IGNORE ${event}`);
  }
};
