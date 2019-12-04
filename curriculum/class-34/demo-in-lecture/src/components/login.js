import React from 'react';
import { LoginContext } from './context';
import If from './if';


class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    this.State = {
      username: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(`form submitted: username=${this.state.username} password=${this.state.password}`);
    this.context.login(this.state.username, this.state.password);
  };
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value;
    })
  }


  render() {
    return (
      <>
      <If condition={this.context.loggedIn}>
        <h3>Logged In</h3>
        <button onClick={this.context.doLogout}>Logout</button>
      </if>

      <If condition={!this.context.loggedIn}>
        <h3>You are not currently logged in</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <input type="submit" value="login" />
        </form>
      </If>
      </>
    );
  }
}

export default Login;
