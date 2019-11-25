import React from 'react';
import { BrowserRouter, Route } from 'react-router-dome';

import Header from './components/header';
import Routes from './components/routes';
import Footer from './components/footer';

class App Extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path ="/" render={() => {<h1>My App!</h1>}} />
        <Route exact path="/about-me" render={() => {<h1>You have reached about me</h1>}}/>
      </BrowserRouter>
    )
  }
}

export defaul App;