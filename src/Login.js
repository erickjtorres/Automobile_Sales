import React, {Component} from 'react';
import './styles/Login.css';
import Form from './Form';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cPassword: '',
            cEmail: '',
            ePassword:'',
            eEmail:'',
          }
      }

      authenticate = () => {
          this.props.authenticate(this.state);
      }

      changeCustomerEmail = (email) => {
        this.setState({
          cEmail: email
        })
        }
    
    
      changeCustomerPass = (pass) => {
        this.setState({
          cPassword: pass
        })
      }
    
      changeEmployeeEmail = (email) => {
        this.setState({
          eEmail: email
        })
        }
    
      changeEmployeePass = (pass) => {
        this.setState({
          ePassword: pass
        })
        }

    render () {
        if(this.props.correct === true) {
            return <Redirect to='/Customer' />
          }

        return (
        <div className="form">
        <div className="row forms">

            <div className="col-sm-6">

            <Form email={this.state.eEmail} password={this.state.ePassword} changeEmail = {this.changeEmployeeEmail} changePass = {this.changeEmployeePass} authenticate={this.authenticate} formTitle="Employee Sign-In"></Form>

            </div>

            <div className="col-sm-6">
            <Form  email={this.state.cEmail} password={this.state.cPassword} changeEmail = {this.changeCustomerEmail} changePass = {this.changeCustomerPass} authenticate={this.authenticate}  formTitle="Customer Sign-In"></Form>
            </div>

        </div>
        <div className="row extra-spacing"></div>
        </div>
        );
    }
}

export default Login;