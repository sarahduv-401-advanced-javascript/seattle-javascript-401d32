'use strict';

const data = Buffer.from('bald');

// <Buffer 68 61 69 72>
console.log(data);

// hair
console.log(data.toString());

// 68616972
console.log(data.toString('hex'));

// 104
console.log(data[0]);

data[1] = 111;

//
console.log(data.toString());
