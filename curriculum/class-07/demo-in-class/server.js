'use strict';

// npm init -y
// npm install express jest superagent

// npm install express-swagger-generator

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// You can do the below to run a function for every route
// app.use(addsNumbers);
// app.use(LOGGER);


app.use(express.json());

// a memory based data storage
// stores post objects
const db = [];


// function errorHandler(status) {
//   return function(request, response) {
//     response.status(status);
//     response.send('error found');
//   };
// }

// the above can be converted to the below

const errorHandler = (status) => (request, response) => response.status(status).send('error found');

function LOGGER(request, response, next) {
  console.log(`the request.method is ${request.method}`);
  next();
}

// function notFound(request, response, next) {
//   response.status(404).send('Not found');
// }

// you have to call next since this is used in an app.XYZ
function logNumbers(request, response, next) {
  console.log('Here are your numbers', request.numbers);
  next();
}

function addsNumbers(request, response, next) {
  request.numbers = [1,2,3];
  next();
}

function handleNewRoute(request, response) {
  let numbers = request.numbers;
  response.send(`Here are those numbers ${numbers[0]} ${numbers[1]} ${numbers[2]}`);
}

app.get('/', logNumbers, (request, response) => {
  response.send('You have hit the slash route');
});

/**
 * Get a list of posts
 * @returns {array} db, status code 200 [...posts];
 * @returns {error} status code 500 - server error;
 */

app.get('/posts', (request, response) => {
  response.json(db);
});

app.post('/posts', (request, response) => {
  const newPost = {
    name: request.body.name,
    content: request.body.content,
  };
  db.push(newPost);
  response.json(newPost);
});

app.get('/newroute', logNumbers, handleNewRoute);

// app.post();

// app.patch();

// app.delete();

// placing this at the bottom will ensure it only displays the error if the path is invalid
app.use(errorHandler(404));


// app is the same as app: app key value pair
module.exports = {
  app,
  start: () => {
    app.list(PORT, () => {
      console.log('server is listening');
    });
  },
};

