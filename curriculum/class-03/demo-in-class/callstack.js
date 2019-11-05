'use strict';

// callstacks are FIFO

const second = () => {
  setTimeout(handler: () => console.log('second'), timeout: 1000);
}

const third = () => {
  console.log('third')
}

const main = () => {
  console.log('first');
  second();
  third();
}

main();
