# Class 03

## JS Event Loop

- Our runtime in the v8 engine.
  - This provides our js with an ecosystem in which our code can execute.
  - Built in is the js event loop.
    - Callstack
    - Callback queue
  - If one function takes a long time to finish, and another function depends on what that function returns? What Do?
    - V8 is Uh like, yo I got you fam: Async!

  - Promises, callbacks, async / await.

## Callbacks

- Design pattern for Async.

```js
// this function will be used to offload functionality
function callback(data) {
  console.log('callback', data);
}

function doesABunch(cb){
  const data = fetch('www.google.com')
  cb(data);
}

doesABunch(callback);

// error first callbacks

const errorFirst = (err, data) => {
  if (err) throw err
  return data;
}
```

## Promises

- A special type of function, created with a constructor.

```js
const longTask = (data) => new Promise((resolve, reject) => {
  // specify conditions that satisfy pass / fail
  if (!data) {
    reject('Uh oh');
  } else {
    resolve(data);
  }
});

longTask(true)
  .then(data => console.log(data))
  .catch(e => console.warn(e));
```

## Async / Await

- Uses a special syntax for forcing async considerations

