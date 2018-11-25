import React, { Component } from 'react';
import './App.css';
import Signinform from './signinform';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="navbar">
      <h1 className="company-name">Database Project</h1>
      </div>
      <div className="row forms">

        <div className="col-sm-6">

          <Signinform formTitle="Employee Sign-In"></Signinform>

        </div>

        <div className="col-sm-6">

          <Signinform formTitle="Customer Sign-In"></Signinform>

        </div>
      </div>
      <div className="row extra-spacing"></div>
      </div>
    );
  }
}

export default App;
