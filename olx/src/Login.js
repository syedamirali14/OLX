import React, { Component } from 'react';
import './App.css';
import { firebaseLogin } from './firebase';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.checklogin = this.checklogin.bind(this);
  }

checklogin() {
const { email , password} = this.state;
// console.log (email , password );
var amr = firebaseLogin(email, password);
console.log(amr);
  }
  render() {
  

    return (
      <div className="App" >
        <header className="App-header">
          <h1>Login Form</h1>
          Email <input placeholder="Enter your email" onChange={(e)=> this.setState({email: e.target.value})} />
          Password <input placeholder="Enter your password" onChange={(e)=> this.setState({password: e.target.value})} />
          <button onClick={this.checklogin}>Login</button>
        </header>
      </div>
    );
  }
}

export default Login; 
