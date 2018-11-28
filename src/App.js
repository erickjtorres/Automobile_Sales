import React, { Component } from 'react';
import Login from './Login';
import Customer from './Customer';
import Employee from './Employee';
import './styles/App.css';
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {

  state = {
    name: '',
    authentication: false
  }

  authenticate = (info) => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((object) => this.setState({
        authentication: object.valid}))
      .catch(err => console.error(err))
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
            <Route path="/" render={()=><Login authenticate={this.authenticate} authenticated={this.state.authentication}/>} exact/>
            <Route path="/Customer" component = {Customer} exact />
            <Route path="/Employee" component = {Employee} exact />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
