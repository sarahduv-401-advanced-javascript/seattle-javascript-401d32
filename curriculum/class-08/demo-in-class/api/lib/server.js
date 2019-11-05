'use strict';

// npm init
// npm install express cors morgan uuid

const express = require('express');
const cors = require('cors'); // allows cross origin resources
const morgan = require('morgan'); // middleware that logs requests

const app = express();
// const router = require('../router');
const categoryRouter = require('../routes/categories-router');

// Cross origin resource sharing (will allow different resource origins).
app.use(cors());
// This is our logger. It will log any requests in our console.
// (':method :url : status :res[content-length] - :response-time ms') can be used instead of 'dev'
app.use(morgan('dev'));
app.use(express.json());

// app.use('/api', router);
app.use('/api', categoryRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`server is up on ${port}`));
  }
}

