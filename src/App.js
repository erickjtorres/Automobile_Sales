import React, { Component } from 'react';
import './App.css';
import Signinform from './signinform';

class App extends Component {

  state = {
    password: "username",
    email: "email",
    authentication: false
  }

  authenticate = (valid) => {
    this.setState({
      authentication: true
    })
  }

  changeUserInfo = (event) => {

    console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
      <div className="navbar">
      <h1 className="company-name">Tesla Automobile Sales</h1>
      </div>
      <div className="row forms">

        <div className="col-sm-6">

          <Signinform  changeinfo = {this.changeUserInfo} formTitle="Employee Sign-In"></Signinform>

        </div>

        <div className="col-sm-6">
          <Signinform  changeinfo = {this.changeUserInfo} formTitle="Customer Sign-In"></Signinform>
        </div>

      </div>
      <div className="row extra-spacing"></div>
      </div>
    );
  }
}

export default App;
