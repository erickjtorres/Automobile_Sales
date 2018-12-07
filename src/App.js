import React, { Component } from 'react';
import Login from './Login';
import Customer from './Customer';
import Employee from './Employee';
import CustomerSignup from './CustomerSignup';
import './styles/App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Signup from './Signup';
import EmployeeSignup from './EmployeeSignup';

class App extends Component {

  state = {
    id: '',
    authentication: false,
    type: ''
  }

  authenticate = (childState, type ) => {
    let info = {}
    if (type === 'c') {
      info = {
        email: childState.cEmail,
        password: childState.cPassword,
        type: type
      }
      fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((object) => this.setState({
        id: object.cid,
        authentication: true,
        type: 'c' }))
      .catch(err => console.error(err))

    } else if (type === 'e') {
      info = {
        email: childState.eEmail,
        password: childState.ePassword,
        type: type
      }
      fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((object) => this.setState({
        id: object.eid,
        authentication: true,
        type: 'e' }))
      .catch(err => console.error(err))
    }
  } 



  render() {

    return (
      //every Route will have a navbar!
      <div className="App">
        <div className="navbar">
          <a href='http://localhost:3000/' className="company-name col-sm-6">Tesla Automobile Sales</a>
          <h3 className="company-name col-sm-6 text-right">{this.state.fname}</h3>
        </div>
      
        <BrowserRouter>
          <div>
            <Route path="/" render={()=><Login authenticate={this.authenticate} type={this.state.type} authenticated={this.state.authentication}/>} exact/>
            <Route path="/Customer" render={()=><Customer cid={this.state.id}/>} exact />
            <Route path="/Employee" render={()=><Employee eid={this.state.id}/>}  exact />
            <Route path="/Signup/Customer" component = {CustomerSignup} exact />
            <Route path="/Signup/Employee" component = {EmployeeSignup} exact />
            <Route path="/Signup" component = {Signup} exact />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
