import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

// const API = process.env.REACT_APP_API;

// const testLogins = {
//   testAdmin: process.env.REACT_APP_ADMIN_TOKEN || '',
//   testEditor: process.env.REACT_APP_EDITOR_TOKEN || '',
//   testUser: process.env.REACT_APP_USER_TOKEN || '',
// };

export const LoginContext = React.createContext();

class LoginWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      doLogin: this.doLogin,
      doLogout: this.doLogout,
      token: null,
      // logout: this.logout,
      user: {}
    };
  }

  doLogin = (username, password) => {
    // This is foul and unsafe ... but when working offline / testmode ess oh
    fetch('https://api-js401.herokuapp.com/signin', {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`
      })
    })
      .then(response => response.text())
      .then(token => this.validateToken(token))
      .catch(console.error);
  };

  validateToken = token => {
    try {
      const user = jwt.verify(token, process.env.REACT_APP_SECRET); //supersecret
      cookie.save('auth', token);
      this.setState({
        loggedIn: true,
        token: token,
        user: user
      });
      //   this.setLoginState(true, token, user);
    } catch (e) {
      this.doLogout();
      console.log('Token Validation Error', e);
    }
  };

  doLogout = () => {
    // this.setLoginState(false, null, {});
    cookie.save('auth', null);
    this.setState({
      loggedIn: false,
      token: null,
      user: {}
    });
  };

  // setLoginState = (loggedIn, token, user) => {
  //   cookie.save('auth', token);
  //   this.setState({ token, loggedIn, user });
  // };

  // componentDidMount() {
  //   const qs = new URLSearchParams(window.location.search);
  //   const cookieToken = cookie.load('auth');
  //   const token = qs.get('token') || cookieToken || null;
  //   this.validateToken(token);
  // }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginWrapper;
