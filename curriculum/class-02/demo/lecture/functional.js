'use strict';

const numbers = [1,2,3];

// non functional approach
const squares = (arr) => {
  for (let x=0; x<arr.length; x++) {
    arr[x] = arr[x] * arr[x];
  }

  return arr;
}

// // This will cause mutation of numbers
// const squareNums = squares(numbers);

// console.log(squareNums);
// console.log(numbers);

// const squareNums = squares(numbers); 

// Uses spread syntax: this places the contents of an iterable into something new.
const squareFunctional = ([...arr]) => {
  // const newArray = Object.assign([], arr);
  for (let x=0; x<arr.length; x++) {
    arr[x] = arr[x] * arr[x];
  }

  return arr;
}

console.log(numbers);
console.log(squareFunctional(numbers));



