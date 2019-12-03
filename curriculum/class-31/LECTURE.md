# Class 31 - Hooks

### Hooks
- This is a more performant and purely functional way of creating react components
- It takes the idea of creating stateless JSX components and allows us to import react funtions meant for HOOKING into class react features.

Old way:

```js
class Name extends React.Component {
  constructor() {
    this.state = {}
  }

  componentDidMount() {}
  
  render() {
    return <h1></h1>
  }
}
```

Now we can do the following (with hooks):

```js
const Name = () => {
  const [state, setState] = useState();

  return (
    <h1></h1>
  )
}
```

Notice in the above, there is not a class, nor is there a constructor or a render.

### useState
- We now have to import the ability to use values like `this.state` (but is not the same)
- Now we use getter and setter:

### useEffect
- This is how we hook into lifecycle methods / handle side effects
- Handles things like subscriptions
  - Handling events
  - Cleaning up side effects
- This replaces componentDidMount, componentDidUpdate, componentWillUnmount, ect.

### useReducer
- This uses getters and setters more like how thaditional this.setState would update values.
- The getter is a initialState value, and the setter is a function that handles when and how the getter value is updated.