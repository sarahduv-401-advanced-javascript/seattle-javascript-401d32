# Class 07
## Express

### What is Express?
- A framework, used to HTTP power API's in JS
  - What is a framework? vs. What is a library?
  - The key difference between a library and a framework is "Inversion of Control". When you call a method from a library, you are in control. But with a framework, the control is inverted: the framework calls you. A library is just a collection of class definitions.
  - A framework gives you a lot of code, and let's the developer add small pieces of their won code.
  - A libary gives you small pieces of code, that you fit into your larger code base.

- Express is non opinionated.
  - This means it's not going to make a lot of decisions for you.
  - It wants you to be able to make all the things.

### What is middleware?
- A piece of functionality that sits between the request and respone

### What is function Currying?
- Currying is the process of taking a function with multiple arguments and returning a series of functions that take one argument and eventually resolve to a value. The original function volume takes three arguments, but once curried we can instead pass in each argument to three nested functions.
- A function that returns another function.

```js

function myCurriedFunction(name) {
  return function(greeting) {
    return `${greeting} ${name}`;
  }
}

```
