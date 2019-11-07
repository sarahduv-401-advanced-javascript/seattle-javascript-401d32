# Socket.io

### Web Sockets
- A feature built on top of TCP.
- It facilitates a maintainable client <--> server relationship.

### Socket.io
- Socket.io sometimes uses web sockets, ut is more or less just a representation of the relationship that sockets try and produce.
- Socket.io is responsible for maintaining its own connection, not simply a socket connection.

#### What does Socket.io do?
- It allows us to emit messages to any connection clients.
- Benefits:
  - We can now create our own events.
  - We can also set up namespaces. These are similar to endpoints it HTTP/REST.
  - We no longer have to deal with buffers. Socket.io handles all of the encoding of our data.
  - We can also have opt in rooms. These are similar to prototypes of a class / branches of an endpoint.
  