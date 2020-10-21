import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected';

import Auth from './components/auth/auth';
import Login from './components/auth/login';
import SignUp from './components/auth/signUp.js';
import LoginContext from './components/auth/cnontext';

export default class App extends React.Component {
  render() {
    return (
      <>
      <LoginContext>
        <Login />
        <SignUp />
        <Auth capability="read">
        <ToDo />
        </Auth>
      </LoginContext>
      </>
    );
  }
}
