import React, { Component } from 'react';
import './App.css';
import { firebaseRegister } from './firebase';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      fullname: '',
      age: 0,
      title: '',
      description: '',
      price: '',
      profileImage: {}
    }
    this.signup = this.signup.bind(this);
  }
  signup() {
    const { email, password, age, fullname } = this.state;
    firebaseRegister(this.state);
  }
  render() {
    // const { steps, emotion } = this.state;

    return (
      <div className="App" >
        <header className="App-header">
          <h1>Registration Form</h1>
           Full Name <input placeholder="Enter your Full Name" onChange={(e) => this.setState({ fullname: e.target.value })} />
          Email <input placeholder="Enter your email" onChange={(e) => this.setState({ email: e.target.value })} />
          Password <input type="password" placeholder="Enter your password" onChange={(e) => this.setState({ password: e.target.value })} />
           Age <input placeholder="Enter your Age" type="number" onChange={(e) => this.setState({ age: e.target.value })} />
          {/* Title <input type="text" placeholder="title"onChange={(e) => this.setState({ title: e.target.value })} />
          Description <textarea placeholder="Description"onChange={(e) => this.setState({ description: e.target.value })} />
          Price <input type="text" placeholder="Price"onChange={(e) => this.setState({ price: e.target.value })} />
          Profile Image <input type="text" placeholder="Profile Image"onChange={(e) => this.setState({ profileImage: e.target.value })} /> */}
          <button onClick={this.signup}>Register Yourself</button>
          
        </header>
      </div>
    );
  }
}

export default Register; 
