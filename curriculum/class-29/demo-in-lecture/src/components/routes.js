import React from 'react';
import { BrowserRouter } from 'react-router-dom';


class Routes extends React.Component {
  render() {
    <BrowserRouter>
      <Route exact path ="/" render={() => {<h1>My App!</h1>}} />
      <Route exact path="/about-me" render={() => {<h1>You have reached about me</h1>}}/>
    </BrowserRouter>
  }
}

export default Routes;

