'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const users = new mongoose.Schema({
  username: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  email: {type: String},
  role: {type: String, default:'user', enum: ['admin','editor','user']},
});

const capabilities = {
  admin: ['create','read','update','delete'],
  editor: ['create', 'read', 'update'],
  user: ['read'],
};

users.pre('save', async function() {
  if (this.isModified('password'))
  {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.authenticateToken = function(token) {

  if ( usedTokens.has(token ) ) {
    return Promise.reject('Invalid Token');
  }

  try {
    let parsedToken = jwt.verify(token, SECRET);
    (SINGLE_USE_TOKENS) && parsedToken.type !== 'key' && usedTokens.add(token);
    let query = {_id: parsedToken.id};
    return this.findOne(query);
  } catch(e) { throw new Error('Invalid Token'); }
};


users.statics.authenticateBasic = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then( user => user && user.comparePassword(auth.password) )
    .catch(error => {throw error;});
};

users.methods.comparePassword = function(password) {
  return bcrypt.compare( password, this.password )
    .then( valid => valid ? this : null);
};

users.methods.can = function(capability) {
  return capabilities[this.role].includes(capability);
};

users.methods.generateToken = function(type) {

  let token = {
    id: this._id,
    capabilities: capabilities[this.role],
    type: type || 'user',
  };

  let options = {};
  if ( type !== 'key' && !! TOKEN_EXPIRE ) {
    options = { expiresIn: TOKEN_EXPIRE };
  }

  return jwt.sign(token, SECRET, options);
};

