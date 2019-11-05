// express, superagent
'use strict';

const express = require('express');
const superagent = require('superagent');

const app = express();

const PORT = 3000;
const googleTokenServerURL = 'https://www.googleapis.com/oauth2/v4/toekn';
const googlePlusAPI = 'https://www.googleapis.com/oauth2/v3/userinfo';
const GOOGLE_CLIENT_ID = process.env.googleClientId;
const GOOGLE_CLIENT_SECRET = process.env.googleClientSecret;
const API_URL = 'http://localhost:3000/oauth';


app.use(express.static('./public'));
app.use(express.json());

app.get('/oauth', authorize);


function authorize (request, response) {

  let code = request.query.code;
  console.log('1- this is my code', code);

  return superagent.post(googleTokenServerURL)
    .type('form')
    .send({
      code: code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: API_URL,
      grant_type: 'authorization_code',
    })
    .then(response => {
      let access_token = response.body.access_token;
      console.log('2- access token received', access_token)
      return access_token;
    })
    .then(token => {
      return superagent.post(googlePlusAPI)
        .set('Authorization', `Bearer ${token}`)
    })
    .then(response => {
      let user = response.body;
      console.log('3- here is our user', user);
      response.status(200).json(user);
    })
    .catch(e => {
      response.send(e));
    })
}




app.listen(PORT, () => console.log(`oauth is up on ${PORT}`));