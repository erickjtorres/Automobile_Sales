import React, {Component} from 'react'; 
import './styles/Signup.css';


class Signup extends Component {
    render() {
        return (
            <div>
            <div className="row">
                <h1 className="col-sm-6 offset-sm-3 text-white">Are you an employee or a customer?</h1>
            </div>
            <div className="choice row">
            <div className="spacing col-sm-12"></div>
            <button type="button" className="btn btn-primary btn-md  col-sm-3  offset-sm-2">Customer</button>
            <button type="button" className="btn btn-secondary btn-md col-sm-3  offset-sm-2">Employee</button>
            <div className="spacing col-sm-12"></div>
            </div>
            </div>
        );
    }
}

export default Signup;