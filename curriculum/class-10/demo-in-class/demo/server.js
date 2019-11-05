'use strict';

const express = require('express');
const LinkedList = require('./lib/linkedList.js.js')

const app = express();
const sentenceList = new LinkedList();

app.use(express.json());

app.get('/sentence', (req, res) => {
  const sentence = sentenceList.toString();
  res.send(sentence);
});

app.post('/sentence', (req, res) => {
  const { word } = req.body;
  sentenceList.append(word);
  // const sentence = sentenceList.toString(); // converted to string in linkedList.js instead
  res.send('test');
})


app.list(3000, () => console.log('app is on port 3000'));