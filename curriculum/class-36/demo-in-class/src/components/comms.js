import React, { useState } from 'react';
import useEvents from '../hooks/events.js';
import usePostMessage from '../hooks/postmessage.js';

function C() {
  const [sendMessage] = usePostMessage();

  return (
    <button onClick={() => sendMessage('cool msg')}>Click for Msg</button>
  )
}

function Comms() {

  const [message, setMessage] = useState();

  const messageHandler = message => {
    setMessage(message);
  }

  const [sayOuch, ouch] = useEvents('ouch msg');
  const [sayOkay, ok] = useEvents('ok ok ok');

  usePostMessage(messageHandler);

  const sendMessages = e => {
    sayOuch('dont do that');
    sayOkay('thats okay');
  }

  return (
    <>
      <p>Message: { message }</p>
      <p>Wrong: { ouch }</p>
      <p>Okay Message: { ok }</p>
      <button onClick={sendMessages}>Send</button>
      <C />
    </>
  )
}

export default Comms;