import React, { useState, useEffect } from 'react';

import Counter from './counter-reducer.js'

const App = () => {
//   this.state = {
//     count: 0
//   }
// the below is like the above ^
  // const [state, setState] = useState({count: 0});
  // count would then be {state.count}
  let [count, setCount] = useState(0);
  let [name, setName] = useState('Jacob');

  // this replaces componentDidMount [], componentDidUpdate [count], componentWillUnmount --> return, ect.
  useEffect(() => {
    // console.log('render', count);
    // remove sockets, unsubscribe from event handlers (return gets a function):
    // return () => {console.log('unmount', count)} --> used for componentWillUnmount
  } []),

  const incrementCount = () => {
    setCount(count++);
    // old way --> this.setSate({count: count++});
  }

  const handleName = (e, str) => {
    // e.preventDefault();
    console.log(str);
    setName(e.traget.value);
  }

  return (
    <>
    <h1>Hello {name}</h1>
    {/* do not invoke the function below, you can do (e) => handleName(e, 'button input')*/}
    <input onChange={handleName} />
    <p>Count: {count}</p>
    <button onClick={incrementCount}>Increment</button>
    </>
  )
}

export default App;