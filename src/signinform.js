import React, { Component } from 'react';
import './signinstyles.css';

class Signinform extends Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleSubmit(event) {
        this.props.authenticate();
        event.preventDefault();
    }

    handleEmailChange(event) {
        this.props.changeEmail(event.target.value);
    }
    handlePassChange(event) {
        this.props.changePass(event.target.value);
    }

    
    render() {
        const email = this.props.email;
        const password = this.props.password;
        return (
            <form className="signform" onSubmit={this.handleSubmit}>
                <div className="container">
                <h3 className="text-center">{this.props.formTitle}</h3>

                <div className="row">
                    <div className="col-sm-8 offset-sm-2 black_bottom"></div>
                </div>

                {/* Email Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row email">
                        <label>Email
                        <input className="text-field" type="text"  placeholder="example@exam.com" name="email" value={email} onChange={this.handleEmailChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Password Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row password">
                        <label>Password
                        <input className="text-field" type="password"  placeholder="example" name="pass" value={password} onChange={this.handlePassChange} required></input>
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