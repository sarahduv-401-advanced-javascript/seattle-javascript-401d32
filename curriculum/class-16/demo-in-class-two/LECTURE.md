# Class 16

## Event Based Systems
- The last two blocks => http / REST
- Many things in JS development are event based:

```js
// Browser event
document.addEventListener('DOMContentLoaded', doSomething);

// Jquery
$('button').on('click', handleClick);

// Express
app.listen();
app.get('/images', handleFetch);

```

- All of these systems use the same series of things:
  - 'When something happens' => 'To this specific thing' => 'Do this specific action'

## Observer Pattern
- A standardized design paradigm in computer science
  - Includes something called a 'subject' maintains a list of dependencies called 'observers'

## Publisher / Subscriber model
- An object that publishes events
- And another object that subscribes to those events
- Neither object cares about the other objects context
- Only the event subscribed and action made are important

## Node Events Module
- The node events module is a library that deals specifically with the Publisher / Subscriber design pattern.
- We can define a list of events that other services can subscribe.

```js
// access to the library
const events = require('events');
// will be callback based, but requires an instantiation of this libary
const EventEmitter = new events();

// This defines a new event called 'Messages', and we have a callback
EventEmitter.on('Messages', () => {
  console.log('Hey a message was sent.');
});

// Can also be written like the below, in a more modular way.
EventEmitter.on('Messages', handleMessages);

// Can also be used to call an API
EventEmitter.on('Messages', http.post('api.facebook.com'));

// Can also be used to call an API ond then send a payload
EventEmitter.on('Messages', ((payload) => {
  http.post('api.facebook.com').send(payload)});

// On the other side we emit things
EventEmitter.emit('Message', {username: 'jacob', message: 'oh heyyy'})
```
