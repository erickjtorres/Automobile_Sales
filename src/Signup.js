import React, {Component} from 'react'; 
import './styles/Signup.css';


class Signup extends Component {
    render() {
        return (
            <div>
            <div className="row">
                <h1 className="col-sm-8 offset-sm-3 text-white text-outline">Are you an Employee or Customer?</h1>
            </div>
            <div className="choice row">
            <div className="spacing col-sm-12"></div>
            <a href='/Signup/Customer'  className="btn btn-primary btn-lg  col-sm-3  offset-sm-2">Customer</a>
            <a href='/Signup/Employee' className="btn btn-secondary btn-lg col-sm-3  offset-sm-2">Employee</a>
            <div className="spacing col-sm-12"></div>
            </div>
            <div className="bottom-space col-sm-12"></div>
            <div className="bottom-space col-sm-12"></div>
            </div>
        );
    }
}

export default Signup;