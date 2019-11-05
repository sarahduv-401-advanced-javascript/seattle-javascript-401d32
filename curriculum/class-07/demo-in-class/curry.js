'use strict';

function myCurriedFunction(name) {
  return function(greeting) {
    return `${greeting} ${name}`;
  };
}

myCurriedFunction('Jacob')('Hello');