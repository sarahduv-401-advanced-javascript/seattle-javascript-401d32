import React from 'react';
import { loginContext } from './context';
import If from './if';

class Auth extends React.component {
  static contextType = loginContext;

  render() {
    let okToRender = false;

    try {
      okToRender =
        this.context.loggedIn &&
        (this.props.capability
          ? this.context.user.capabilities.includes(this.props.capability)
          : true);
    } catch (e) {
      console.warn('Not authed', e);
    }

    // if (
    //   this.context.loggedIn &&
    //   this.context.value.user.capabilities.includes(this.props.capability)
    // ) {
    //   okToRender = true;
    // }
    // return <If condition={okToRender}>{this.props.children}</If>;
  }
}

export default Auth;
