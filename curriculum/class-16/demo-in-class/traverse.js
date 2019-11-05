function traverse(node) {
  console.log(node) // 
  // BASE case: our answer we are accounting for
  if (!node.next) {
    return node.value;
  }
  traverse(node.next);
}

console.log(traverse(test.head));
// assuming you have created a node class and a linked list class