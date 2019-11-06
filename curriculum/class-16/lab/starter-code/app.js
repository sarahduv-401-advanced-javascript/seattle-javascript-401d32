'use strict';

const fs = require('fs');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);

// use the below for testing the read file
// What are the inputs of fs.writeFile?
// What does it return? how does it handle errors?
// exports.readFile = (file, cb) => {
//   if(!file || file.match(/bad/i)) {
//     cb('invalid file');
//   } else {
//     cb(undefined, new Buffer('File content');
//   }
// }
