'use strict';

const Messages = require('../modules/messages-schema');

// const messages = new Messages();

require('./supergoose.js');

describe('Messages Model', () => {
  it('Can create a new message', (done) => {
    const newMessage = new Messages({ text: 'testing messages'});
    newMessage.save()
      .then(message => {
        expect(message.text).toBe('testing messages');
        done();
      }).catch(err => {
        console.error(err);
        done();
    });
  })
})