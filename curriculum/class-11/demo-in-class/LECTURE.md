# Auth and Queues + Stacks

## Queues and Sacks

### Abstract Data Structures
- What is an Abstract Data Structure?
- Only defined by its behavior, not a specific implementation.

#### Stack:
- A stack has the behavior: FILO / LIFO
  - Whatever object is pushed in first, will be the last to be popped.
    - Push (adds an item to the stack)
    - Pop (removes an item from the stack)
    - Peek (look at whats in the stack)
    - Top and a bottom.

#### Queue
- Follow the reverse behavior: FIFO
- Whatever object is enqueued into the queue will be the first object to be dequeued.
  - Enqueue (adds an time to the rear of the queue)
  - Dequeue (removes an item from the front)
  - Tracks a rear and a front.

Request --> Middelware --> Response

```js
app.get('/users', requestTime, handleUsers)
```

## Auth

- Authentication: Who are you?
- Authorization: Are you allowed to do what you are trying to do? (based on who you are)

### String Based Authentication
- We have the user make a user object:
  - username
  - password
  - Sent to our service as encrypted strings.
- Then we need to parse the string and decide is this a new user or an existing user.
- Creating a one way encrypted token, which the user can store and use for all auth requests.