import React, {Component} from 'react';
import './styles/Popupstyles.css';


class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            password: '',
            st_num: '',
            st: '',
            city: '',
            state: '',
            gender: '',
            income: '',
            type: 'c'
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

    handleStreetNumberChange = (event)  => {
        this.setState({
            st_num: event.target.value
        }) 
    }

    handleStreetNameChange = (event) => {
        this.setState({
            st: event.target.value
        }) 
    }

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        }) 
    }


    handleStateChange  = (event) => {
        this.setState({
            state: event.target.value
        }) 
    }
    handleGenderChange  = (event) => {
        this.setState({
            gender: event.target.value
        }) 
    }
    handleIncomeChange  = (event) => {
        this.setState({
            income: event.target.value
        }) 
    }


    handleSubmit = (event) => {
        fetch('http://localhost:3001/editpersonal', {
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
    render() {
        return (
        <div className='popup'>
            <div className='popup_inner'>
                <div className='top-padding'></div>
                <div className='row'>
                    <h4 className='col-sm-3 offset-sm-4 text-center'>Personal Info</h4>
                    <button className='col-sm-1 btn btn-secondary btn-sm offset-sm-3' onClick={this.props.closePopup}>X</button>
                </div>
                <div className='row'>
                    <p className='col-sm-12 text-center'>Current information are within the text fields. Only submit if you want to this to change!</p>
                </div>
                <form className="signform customerpadding" onSubmit={this.handleSubmit}>
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2 black_bottom"></div>
                </div>
                <div className="row">
                {/* First Name Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>First Name
                        <input className="text-field" type="text"  placeholder="John" name="fname" value={this.state.fname} onChange={this.handleFirstNameChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Last Name Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Last Name
                        <input className="text-field" type="text"  placeholder="Stewart" name="lname" value={this.state.lname} onChange={this.handleLastNameChange} required></input>
                        </label>
                    </div>
                </div>
                </div>

                <div className="row">
                {/* Email Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Email
                        <input className="text-field" type="text"  placeholder="Stewart" name="email" value={this.state.email} onChange={this.handleEmailChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Password Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row password">
                        <label>Password
                        <input className="text-field" type="password"  placeholder="example" name="pass" value={this.state.password} onChange={this.handlePassChange} required></input>
                        </label>
                    </div>
                </div>
                </div>

                <div className="row">
                  {/* Phone Number*/}
                  <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Phone Number
                        <input className="text-field" type="text"  placeholder="3124785453" name="phone" value={this.state.phone} onChange={this.handlePhoneChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Street Number */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Street Number
                        <input className="text-field" type="text"  placeholder="2456" name="stnumber" value={this.state.st_num} onChange={this.handleStreetNumberChange} required></input>
                        </label>
                    </div>
                </div>
                </div>
                
                <div className="row">
                 {/* Street Name */}
                 <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Street Name
                        <input className="text-field" type="text"  placeholder="33rd st" name="stname" value={this.state.st} onChange={this.handleStreetNameChange} required></input>
                        </label>
                    </div>
                </div>

                {/* City Name */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>City
                        <input className="text-field" type="text"  placeholder="Chicago" name="stname" value={this.state.city} onChange={this.handleCityChange} required></input>
                        </label>
                    </div>
                </div>
                </div>

                <div className="row">
                  {/* State Name */}
                  <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>State
                        <input className="text-field" type="text"  placeholder="IL" name="stname" value={this.state.state} onChange={this.handleStateChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Gender Name */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Gender
                        <input className="text-field" type="text"  placeholder="Male" name="gender" value={this.state.gender} onChange={this.handleGenderChange} required></input>
                        </label>
                    </div>
                </div>
                </div>

                  {/* Income Name */}
                  <div className="col-sm-8 offset-sm-2">
                    <div className="row email">
                        <label>Income
                        <input className="text-field" type="text"  placeholder="2132412" name="income" value={this.state.income} onChange={this.handleIncomeChange} required></input>
                        </label>
                    </div>
                </div>



                

                <div className="col-sm-6 offset-sm-3">
                <input className="buttons" type="submit" value="Change Info" />
                </div>
                <div className="paddingbelow"></div>
                </div>
          </form>

            </div>
      </div>
        );
    }
}

export default Popup;