import React from 'react';

import Auth from './components/auth.js';
import Login from './components/login.js';
import LoginWrapper from './components/login.js';
import If from './components/if.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LoginWrapper>
        <Login />
        <hr />
        <Auth capability="update">
          <button>Edit Something</button>
        </Auth>
        <Auth capability="delete">
          <button>Delete Something</button>
        </Auth>
        <Auth capability="read">
          <button>Read Something</button>
        </Auth>
        <Auth capability="create">
          <button>Create Something</button>
        </Auth>
      </LoginWrapper>
    );
  }
}

export default App;
