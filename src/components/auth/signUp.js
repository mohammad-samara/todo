import React from 'react';

import { LoginContext } from './cnontext'
import Show from '../show/show';


class SignUP extends React.Component {

  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      role: 'user',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.sigup(this.state.username, this.state.password, this.state.email, this.state.role);
  }

  render() {
    return (
      <>
        <Show condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit} >
            <input
              placeholder="userName"
              name="username"
              onChange={this.handleChange}
            /><br />
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={this.handleChange}
            /><br />

            <input
              placeholder="email"
              name="email"
              onChange={this.handleChange}
            /><br />
            {/* 
            <input
              placeholder="role"
              name="role"
              onChange={this.handleChange}
            /><br/> */}
            <select onChange={this.handleChange} name="role">
              <option value="user" >User</option>
              <option value="admin" >Admin</option>
              <option value="editors" >Editor</option>
            </select><br/>

            <button>SignUP</button>
          </form>
        </Show>
      </>
    )
  }

}

export default SignUP
