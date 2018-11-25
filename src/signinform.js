import React, { Component } from 'react';
import './signinstyles.css';

class Signinform extends Component {
    render() {
        return (
            <form className="signform">
                <div className="container">
                <h3 className="text-center">{this.props.formTitle}</h3>

                <div className="row">
                    <div className="col-sm-8 offset-sm-2 black_bottom"></div>
                </div>

                {/* Email Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row email">
                        <label>Email
                        <input className="text-field" type="text"  placeholder="Enter Email" name="email" required></input>
                        </label>
                    </div>
                </div>

                {/* Password Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row password">
                        <label>Password
                        <input className="text-field" type="password"  placeholder="Enter Password" name="pass" required></input>
                        </label>
                    </div>
                </div>

                <div className="col-sm-6 offset-sm-3">
                <input className="buttons" type="submit" value="Sign-In" />
                </div>
                {/* <input className="buttons" type="submit" value="Sign-Up" /> */}

                </div>
          </form>
        )
    }
}

export default Signinform;