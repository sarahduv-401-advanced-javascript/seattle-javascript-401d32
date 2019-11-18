# Class 26

## Overview
- Introduction to component based UI

### Code Challenge
> Write a function that takes in a linked list, and returns a new linked list with it's Node's reversed.
  - If you've completed the challenge previously, let them know.
  - Allow them to give you another challenge if they want.
- Ask about using built in methods, ask if they want to use built in methods from scratch off of a class.
  - Ask a lots of clarifying questions
    - What can I assumed about linked lists?
    - What can I assume about nodes?
  - Interviewers will be vague to see your ability to ask good questions.
- Talk about the characteristics of a node class.
- Identify proper inputs and outputs.
  - We really like pictures.
  - Drawing illustrations of data structures and using callouts to operations.
- Algorithm
  - Enumerated lists.
  - Talk about efficiency (big o notation)
  - What are all the steps that your solution will use? e.g.:
    - First I will traverse the list.
    - Then I will define my variables.
    - If some conditional exists I will perform the following operations.
  - Step through your algorithm with your cample input / output from above.
- Pseudocode
  - Code like statements that are very explicit and could easily be turned into code.
- Produce syntactically correct code.
  - Edge cases and how might you test this code.
- Pivoting
  - Ask many questions and if possible a hint.

```js
class LinkedList {
  constructor() {
    this.head = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Steps to getting from input to output:
// Declare some variables for points to nodes
// Traverse our list
// Reassigning pointers for each interation of our while loop
// Return new linked list

// Pseudo
// var prev = null
// var next = null
// var current = linkedList.head
// while current !== null
//   next = current.next
//   current.next = previous
//   previous = current
//   current = next

```