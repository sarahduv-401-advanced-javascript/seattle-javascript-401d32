'use strict';

//We want to allow non blocking async functionality similar to promises

let request = (url) => {
  if (url) {
    return JSON.stringify({data: 'Jacob'});
  } else {
    return new Error();
  }
  // return JSON.stringify({data: Jacob});
}

async function getData(url) {
  try {
    let result = await request(url);
  } catch(e) {
    console.warn(e);
  }
  // let result = await request(url);
  // console.log(result);
}

console.log(getData(url: 'www.google.com'));
getData(url: 'www.google.com');