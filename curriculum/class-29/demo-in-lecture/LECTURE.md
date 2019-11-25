# Class 29

### Review of contextual this
```js
class MyComponent extends React.Component {
  constructor() {
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // using the lamda, it automatically binds, and you don't have to do the above ^
  handleSubmit = (e) => {
    e.preventDefault();
    callAPI();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}></form>
    )
  }
}
```

## Routing and Component Composition
- When accessing browser files we usea path to a sepcific file:
  - 'www.jacob.com.info/about-me'
  - We still want to include data about our app state in our URL.
  - But we have a problem:
    - Single page apps dont need to track other html files.
  - How can we bake our app state into our url, and have things work in React?
    - We can conditionally render stuff using our url:
```jsx
const RenderIf = (props) => props.condition ? props.children : null

// In another file:
return (
  <RenderIf condition={document.location.pathname.includes('about-me')}>
    <AboutMe/>
  </RenderIf>
)
```

## React-Router
```jsx
<Route path="/about-me" component={AboutMe}/>
```

## Building Complex Apps
- Our apps are going to start to be filled with many more components.
- We need to plan out how our apps are composed:
  - What is the purpose of my component?
  - Display Data? What data does it need, from where?
  - Collecting form data? What sort of data does it need?
  - Fetching from an API? Do I need to make async calls, when does it need to happen?
  - Toggling or changing component state?
- What is our App hierarchy?
  - Is there any data that children depend on?
  - What's the relationship between children?
  - How do we justify that relationship?
  - What happens if one child changes the state, do the other children need to know?
- It will help to think of your components as "cards in a deck", especially when thinking about your hierarchy.