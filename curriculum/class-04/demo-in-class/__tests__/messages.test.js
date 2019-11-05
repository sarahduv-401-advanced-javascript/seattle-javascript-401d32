'use strict';

const Messages = require('../models/messages');

describe('Messages model', () => {
  let messages;

  beforeEach(() => {
    messages = new Messages();
  });
  it('Can create and fetch a new Message', () => {
    let newMessage = {text: 'test message'};

    const message = messages.create(newMessage);
    const allMessages = messages.get();
    expect(message.text).toBe('test message');
    expect(message.id).toBeDefined();
    expect(allMessages.length).toBe(1);
  });
});