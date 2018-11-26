import React, { Component } from 'react';
import Login from './Login';
import Customer from './Customer';
import Employee from './Employee';
import './styles/App.css';
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {

  state = {
    fname: '',
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
      console.log(this.state)
  } 



  render() {

    return (
      //every Route will have a navbar!
      <div className="App">
        <div className="navbar">
          <h1 className="company-name">Tesla Automobile Sales</h1>
        </div>
      
        <BrowserRouter>
          <div>
            <Route path="/" render={()=><Login authenticate={this.authenticate} correct={this.state.authentication}/>} exact/>
            <Route path="/Customer" component = {Customer} exact />
            <Route path="/Employee" component = {Employee} exact />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
