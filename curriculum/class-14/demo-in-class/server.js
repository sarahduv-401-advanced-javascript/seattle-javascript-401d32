'use strict';

// bcrypt mongoose jwt express dotenv
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const auth = reuqire('./auth');
const User = require('./user-model');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

app.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    })
    .catch(next);
});

app.post('/signin', auth('read'), (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});




app.listen(300, () => {
 console.log('app is running on 3000');
});