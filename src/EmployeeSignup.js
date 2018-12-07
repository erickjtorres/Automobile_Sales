import React, {Component} from 'react';

//This needs to be split into multiple components --> future

//req.body.fname, req.body.lname, req.body.phone, req.body.eEmail, req.body.ePassword, req.body.st_num, req.body.st, req.body.city, req.body.state
class EmployeeSignup extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            password: '',
            dealer:'',
            type: 'e'
          }
      }

      handleFirstNameChange = (event) => {
          this.setState({
              fname: event.target.value
          }) 
      }

      handleLastNameChange = (event) => {
        this.setState({
            lname: event.target.value
        }) 
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        }) 
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        }) 
    }

    handlePassChange = (event) => {
        this.setState({
            password: event.target.value
        }) 
    }

    handleDealerChange = (event) => {
        this.setState({
            dealer: event.target.value
        }) 
    }

    handleSubmit = (event) => {
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            },
          })
            .then((response) => response.json())
            .then((object) => console.log(object))
            .catch(err => console.error(err))
        
        event.preventDefault();
    }
    
    render () {
        return (
            <form className="signform" onSubmit={this.handleSubmit}>
                <div className="container">
                <h3 className="text-center">Welcome Employee!</h3>
                <h4 className="text-center">Sign-Up Below!</h4>

                <div className="row">
                    <div className="col-sm-8 offset-sm-2 black_bottom"></div>
                </div>

                {/* DealerID Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row email">
                        <label>DealerID
                        <input className="text-field" type="text"  placeholder="213444" name="dealer" value={this.state.dealer} onChange={this.handleDealerChange} required></input>
                        </label>
                    </div>
                </div>

                {/* First Name Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row email">
                        <label>First Name
                        <input className="text-field" type="text"  placeholder="John" name="fname" value={this.state.fname} onChange={this.handleFirstNameChange} required></input>
                        </label>
                    </div>
                </div>


                {/* Last Name Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row email">
                        <label>Last Name
                        <input className="text-field" type="text"  placeholder="Stewart" name="lname" value={this.state.lname} onChange={this.handleLastNameChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Email Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row email">
                        <label>Email
                        <input className="text-field" type="text"  placeholder="Stewart" name="email" value={this.state.email} onChange={this.handleEmailChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Password Submission */}
                <div className="col-sm-8 offset-sm-2">
                    <div className="row password">
                        <label>Password
                        <input className="text-field" type="password"  placeholder="example" name="pass" value={this.state.password} onChange={this.handlePassChange} required></input>
                        </label>
                    </div>
                </div>



                

                <div className="col-sm-6 offset-sm-3">
                <input className="buttons" type="submit" value="Sign-Up" />
                </div>

                </div>
          </form>
        );
    }
}

export default EmployeeSignup;