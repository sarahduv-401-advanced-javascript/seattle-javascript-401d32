'use strict';

const events = require('events');
const EventEmitter = new events();

const data = [
  {id: 100, data: 'Jacob'},
  {id: 101, data: 'is awesome'},
]

EventEmitter.on('save', (payload) => {
  console.log(`Record ${payload.id} was saved`);
  EventEmitter.emit('log', payload);
});

EventEmitter.on('log', payload => log('log', payload ));

function log(event, payload) {
  let time = new Date();
  console.log({event, time, payload});
}

// filters through the data and filters out the one we want to delete. It will return everything else that remains.
function handleDelete(payload) {
  data = data.filter(item => {
    return item.id !== payload.id;
  })
}

EventEmitter.emit('save', { id: 100 });
EventEmitter.emit('log', { id: 101 });
EventEmitter.emit('delete', { id: 77 });