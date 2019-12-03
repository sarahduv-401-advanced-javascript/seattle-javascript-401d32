import React, { useState, useEffect } from 'react';

const useEvents = event => {
  const [payload, setPayload] = useState();

  const send = message => {
    // this is a newer thing in the browser that allows us to create our own custom events
    let e = new CustomEvent(event, { details: message });
    // window is the browser's object
    window.dispatchEvent(e);
  }
  // we want this to happen every time there is an event
  useEffect(() => {
    window.addEventListener(event, e => {
      setPayload(e.detail);
    })
  }, [event]);

  return [send, payload];
}

export default useEvents;