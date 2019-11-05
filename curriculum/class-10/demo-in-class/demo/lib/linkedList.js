'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(Value);

    if(this.head === null) {
      this.head = node;
      return this.toString();
    }

    let current = this.head;
    while(current.next) {
      current = current.next
    }

    current.next = node;
    return this.toString();
  }

  toString() {
    let sentence ='';

    if(this.head === null) {
      sentence = 'No words available';
    }

    let current = this.head;
    while(current) {
      sentence = `${sentence} ${current.value}`
      current = current.next
    }
    return sentence;
  }

}
