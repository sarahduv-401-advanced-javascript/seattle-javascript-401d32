# Class 15

## Recursion and Project Prep

- What is Recursion?
  - A function that calls itself

```js
// not recursion, but has some similarities
while(current.next) {
  current = current.next
}
```

- Let's say we want to add numbers:

```js
function add(a, b) {
  console.log(a, b); // 5/5 >> 6/4 >> 7/3 >> 8/2 >> 9/1 >> 10
  // BASE case, and answer that is known and we can stop our function
  if (b === 1) {
    return a+b;
  }
  return add(a + 1, b - 1);
}
console.log(add(5, 5,)); // this will log "10"
```

- What about traversing a linked list?

```js
function traverse(node) {
  console.log(node) // 
  // BASE case: our answer we are accounting for
  if (!node.next) {
    return node.value;
  }
  traverse(node.next);
}
```