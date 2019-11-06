'use strict';

const net = require('net');

const client = new net.Socket();

// port, host, log
client.connect(3001, 'localhost', () => {
  console.log('app connected to host');
});

const events = ['create','foo','read','baz','update','bing','rain','attack','error','bark','error'];

setInterval( () => {
  let event = events[ Math.floor( Math.random() * events.length ) ];
  client.write( `${event} an event (${event}) just happened!` );
},500);

client.on('close', function() {
  console.log('Connection closed');
});

// client.destroy(); // kill client after server's response