import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleCount}></button>
      </div>
    )
  }
}

export default counter;