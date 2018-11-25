import React, { Component } from 'react';
import './App.css';
import Signinform from './signinform';

class App extends Component {

  state = {
    cPassword: '',
    cEmail: '',
    ePassword:'',
    eEmail:'',
    authentication: false
  }

  authenticate = (valid) => {
    this.setState({
      authentication: true
    })
    console.log(this.state);
  }

  changeCustomerEmail = (email) => {
    this.setState({
      cEmail: email
    })
    }


  changeCustomerPass = (pass) => {
    this.setState({
      cPassword: pass
    })
  }

  changeEmployeeEmail = (email) => {
    this.setState({
      eEmail: email
    })
    }

  changeEmployeePass = (email) => {
    this.setState({
      ePassword: email
    })
    }

  render() {
    return (
      <div className="App">
      <div className="navbar">
      <h1 className="company-name">Tesla Automobile Sales</h1>
      </div>
      <div className="row forms">

        <div className="col-sm-6">

          <Signinform  email={this.state.eEmail} password={this.state.ePassword} changeEmail = {this.changeEmployeeEmail} changePass = {this.changeEmployeePass} authenticate={this.authenticate} formTitle="Employee Sign-In"></Signinform>

        </div>

        <div className="col-sm-6">
          <Signinform  email={this.state.cEmail} password={this.state.cPassword} changeEmail = {this.changeCustomerEmail} changePass = {this.changeCustomerPass} authenticate={this.authenticate}  formTitle="Customer Sign-In"></Signinform>
        </div>

      </div>
      <div className="row extra-spacing"></div>
      </div>
    );
  }
}

export default App;
