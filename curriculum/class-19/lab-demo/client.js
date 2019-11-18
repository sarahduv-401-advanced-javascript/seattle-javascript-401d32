'use strict';

const io = require('socket.io-client');
// base connection to socket io
const SERVER = process.env.Q_SERVER || 'http://localhost:3333';

class QClient {
  constructor(namespace) {
    this.namespace = namespace;
    this.sockets = [];
  }

  subscribe(event, callback) {
    this.sockets[event] = io.connect(`${SERVER}/${this.namespace}`);
    this.sockets[event].emit('subscribe', event, (err, status) => {
      if (err) console.error(err);
      else console.log(status);
    });
    this.sockets[event].on('trigger', callback);
  }

  subscriptions() {
    // will return all the sockets we have
    return Object.keys(this.sockets);
  }

  static publish(queue, event, payload) {
    let q = io.connect(`${SERVER}`)
    let message 
    q.emit('publish', message () => {
      q.disconnect();
    })
  }
}

module.exports = QClient;