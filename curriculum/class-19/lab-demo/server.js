'use strict';

const Server = require('socket.io');

// q server class that takes in a namespace and adds event methods
class Queue {
  constructor() {
    // step 1 instantiate our Queue with a namespace
    this.events = new Set();
    this.name = name;
    this.q = Queue.io.of(`/${name}`);
    this.q.on('connect', this.connect.bind(this));
  }

  // this allows us to pass in our socket and connect to our room
  connect(socket) {
    socket.on('subscribe', (event, callback) => {
      if (this.events.has(event)) {
        socket.join(event);
        const message = `subscribed to ${event} in ${this.name} ... ${socket.id}`;
        console.log(message);
        if (callback) callback(undefined, message);
        console.log(`All subscribers... ${event}, ${this.connections(event)}`)
      } else {
        const message = `Invalid event: ${event}`;
        console.log(message);
        if (callback) callback(message);
      }
    });
  }

  monitorEvent(event) {
    this.events.add(event);
  }

  connections(event) {
    return Object.keys(this.q.adapter.rooms[event].sockets);
  }

  static publish(message, callback) {
    let {queue, event, payload} = message;
    // .of is of the namespace and the .to event is the channel
    Queue.io.of(queue).to(event).emit('trigger', payload);
  }

  // step two creating our static start method that awaits connect, but creates out publish event
  static start() {
    let PORT = process.env.PORT || 3333;

    Queue.io = new Server(PORT);
    Queue.io.on('connection', socket => {
      console.log('connected');
      socket.on('publish', Queue.publish)
    });
    console.log(`Queue server up on ${PORT}`);
  }
}

module.exports = Queue;