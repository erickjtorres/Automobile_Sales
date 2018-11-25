import React, { Component } from 'react';
import './signinstyles.css';

class Signinform extends Component {
    render() {
        return (
            <form className="signform">
            <div className="container">
            <h3 className="text-center">{this.props.formTitle}</h3>

              <div className="row username">
              <label for="uname">Username</label>
              <input className="text-field" type="text" placeholder="Enter Username" name="uname" required></input>
  
              </div>
              
              <div className="row password">
              <label for="pass">Password</label>
              <input className="text-field" type="text" placeholder="Enter Password" name="pass" required></input>
              </div>

              <input className="submission" type="submit" value="Sign-In" />
              <input className="submission" type="submit" value="Sign-Up" />

            </div>
          </form>
        )
    }
}

export default Signinform;