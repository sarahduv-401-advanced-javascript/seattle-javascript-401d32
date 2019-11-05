
validator.isString = function(input) {
  return typeof input === 'string';
}

const validator = require('../validator');

// This method of TDD is known as unit testing.
describe('test validator', () => {
  if ('isString should reutrn true when passed a string', () => {
    validator.isString('some test string').toEqual(true);
  });
});

//Next: Integration testing

********************************************

validator.isValid = function(input, rules) {

}

validator.isValid(1, (input2) => {
  return typeof input2 === 'number';
});

*********************************************

To add JSdocs
jsdoc -c /docs/config/jsdoc.config.json

*********************************************

This (contextual)!!

See lecture.js

Object oriented programming - OOP

Creating objects of the same type
  Object with similar properties and methods:

JS has threemethods for acheiving OOP:
  Factories
  Constructor
  Class

***********************************************

Function programming
- No mutations = no side effects
- 2 + 2 = 4, these inputs are never going to change
- add(num1, num2) = always be the same
- functions do as few things as possible

***********************************************

Lab submission requirements

UML
Deploy
Travis
JSDoc
README
- link to pr
- link to heroku
- link to travis
photo to uml


