# Class 17 TCP

### What is TCP?
- Transmission Control Protocol
- It's a standard that defines how to connect with other computers / applications / ect. to exchange data.
- It sit's on top of IP, internet protocol.
- It essential establishes a link between two IP's, giving you access to whatever events and data you want to emit between the connection.
- The way the internet works in a combination of TCP and IP.
- IP establishes the points of connection, and TCP establishes how they connect.
- HTTP is a layer on top of a TCP connection.

### The TCP Connection
- A host says that things can connect to an address and a port.
- A client reaches out to that address and port, and makes the connection.
- It uses events to facilitate the connection process.
- It sends data back and forth using Streams.
- Streams are just small string based data packets passed between host and client(s).
- A TCP connection guarantees that data will transfer between two applications in the order they were sent.

