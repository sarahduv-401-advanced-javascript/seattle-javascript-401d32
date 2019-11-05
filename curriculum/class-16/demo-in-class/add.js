function add(a, b) {
  console.log(a, b); // 5/5 >> 6/4 >> 7/3 >> 8/2 >> 9/1 >> 10
  // BASE case, and answer that is known and we can stop our function
  if (b === 1) {
    return a+b;
  }

  return add(a + 1, b - 1);
}

console.log(add(5, 5,)); // this will log "10"