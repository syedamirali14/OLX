import React, { Component } from 'react';
import './App.css';
import { Login } from './firebase';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      age: props.age,
      fullname: props.fullname
    }
    this.updateProfile = this.updateProfile.bind(this);
  }
  updateProfile() {
const { email , password} = this.state;
console.log (email , password );
this.login(email, password);
  }
  render() {
  const {email, fullname, age} = this.state;

    return (
      <div className="App" >
        <header className="App-header">
          <h1>Profile</h1>
          Full Name <input value = {fullname} onChange={(e)=> this.setState({fullname: e.target.value})} />
          Email <input disabled value = {email} />
          Age <input value = {age} onChange={(e)=> this.setState({age: e.target.value})} />
          <button onClick={this.updateProfile}>Save</button>
        </header>
      </div>
    );
  }
}

export default Profile; 
