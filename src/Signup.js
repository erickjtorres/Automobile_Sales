import React, {Component} from 'react'; 
import './styles/Signup.css';


class Signup extends Component {
    render() {
        return (
            <div className="form">
            <button type="button" className="btn btn-secondary btn-lg btn-block">Customer</button>
            <button type="button" className="btn btn-secondary btn-lg btn-block">Employee</button>
            </div>
        );
    }
}

export default Signup;