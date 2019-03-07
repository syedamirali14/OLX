import React, { Component } from 'react';
import './App.css';
import Register from './register';
import Login from './Login'
import Profile from './profile';
import { firebaseLogin } from './firebase';
import {firebaseRegister} from './firebase';
import Modal from 'react-responsive-modal';
import profileModal from './profileModal';
class App extends Component {
  constructor() {
    super();
    this.state = {
      showRegister: false,
      showLogin: false,
      showModal: false,
      user: '',
      open: false
    }

    
    this.signup = this.signup.bind(this)  ;
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  signup() {
    const { email, password } = this.state;
    console.log(email, password);
    firebaseRegister(email, password);
  }
  render() {
    const {showLogin, showRegister, user ,showModal ,open} = this.state;

    return (
      <div className="App" >
        <header className="App-header">
          {!user && showRegister && <Register />}
          {!user && showLogin && <Login />}
          {user && <Profile />}
          <br />
          {!user && !showRegister && <button onClick={() => this.setState({ showRegister: true, showLogin: false })}>Register Yourself</button>}
          {!user && !showLogin && <button onClick ={() => this.setState({showLogin: true, showRegister: false})}>Are you already rigister?</button>}
          {/* {!open && !showModal && <button onClick ={() => this.setState({open: true, showModal: false})}>update your ad?</button>} */}
          {/* {showModal && showLogin && <button onClick ={() => this.setState({open: true, showModal: false})}>update your ad?</button>} */}

        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
          <div>
        <input type="text" placeholder="title"></input>
        <textarea placeholder="Description"></textarea>
        <input type="text" placeholder="Price"></input>
        <input type="text" placeholder="Profile Image"></input>
        <input type="submit"></input>
      </div>
          <profileModal />
        </Modal> 

         </header>
      </div>
    );
  }
}

export default App; 
