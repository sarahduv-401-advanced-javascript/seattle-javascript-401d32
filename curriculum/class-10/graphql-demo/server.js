'use strict';

// npm install express graphql express-graphql morgan
// localhost:port/graphql

const express = require('express');
const { buildSchema } = require('graphql');
const expressGraphql = require('express-graphql');
const router = require('/memory');

const app = express();

const simpleSchema = buildSchema(`
  type Query {
    message: String
  }
`);

const simpleResolver = {
  message: () => 'hey there',
}

const graph = expressGraphql({
  schema: simpleSchema,
  rootValue: simpleResolver,
  graphiql: true
});

router.use('/graphql', graph);

app.use(router);

app.listen(3000, () => console.log('app up'));



/**
 * {
 * people {
 * firstName
 * lastName
 * }
 * }
 */

