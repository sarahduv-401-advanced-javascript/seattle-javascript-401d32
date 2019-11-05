'use strict';

// have one user model and one middleware for auth.
// express, jsonwebtoken bcrypt mongoose

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopoloy: true,
})

const User = require('./user-model.js');
const auth = require('./auth-middleware.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
})

app.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

app.get('/unprotected', (req, res) => {
  res.send('you are unprotected');
});

app.get('/protected', auth, (req, res) => {
  res.send('you have a valid token');
});

app.list(3000, () => console.log('app is running'));