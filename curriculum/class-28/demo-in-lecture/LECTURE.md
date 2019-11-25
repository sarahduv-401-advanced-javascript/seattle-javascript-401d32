# Class 28

## Props

### Component State
- `this.state`
  - In labs 27 and 28 we've used state to tracka counter variable.
  - We want to consider component our source of truth for that components purpose.
  - Only the single component has access to this.

### Component Properties
- `this.props`
  - One way hierarchy of a glimpse into a parent components state values.
  - Only a parent can pass values down into it's children.
  - By using values places similar to an attribute, children can see the state context that are above them in the DOM tree.