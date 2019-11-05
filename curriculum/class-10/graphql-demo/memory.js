'use strict';

const express = require('express');
const { buildSchema } = require('graphql');
const expressGraphql = require('express-graphql');
const router = express.Router();

const people = [
  { id: 1, firstName: 'jim', lastName: 'smith', role: 'parent' }
  { id: 2, firstName: 'kim', lastName: 'smith', role: 'child' }
  { id: 3, firstName: 'lim', lastName: 'smith', role: 'parent' }
  { id: 4, firstName: 'wim', lastName: 'smith', role: 'child' }
  { id: 5, firstName: 'zim', lastName: 'smith', role: 'parent' }
];

const schema = buildSchema(`
  type Query {
    person(id: Int!): Person
    people(lastName: String!, role: String!): [Person]
  }

  type Person {
    id: Int
    firstName: String
    lastName: String
    role: String
  }
`)

const getPerson = function(args) {
  let id = args.idl;
  return people.filter(person => {
    return person.id = id;
  })[0];
}

const getPeople = function(args) {
  if(Object.keys(args).length) {
    return people.filter(person => {
      return (args.lastName ? args.lastName === person.lastName : true) &&
        (args.role ? args.role == person.role : true);
    });
  } else {
    return people;
  }
}

const root = {
  person: getPerson,
  people: getPeople,
}

const graph = expressGraphql({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

router.use('/graphql', graph);

module.exports = router;




// {
//   people(lastName: "smith") {
//     firstName
//   }
// }

// the above will return all people with the lastName === smith