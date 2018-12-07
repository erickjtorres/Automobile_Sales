import React, {Component} from 'react';
import './styles/Popupstyles.css';


class StockPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cid: '',
            vin: '',
            did: ''
            // eid: this.props.eid
          }
      }

      handleCidChange = (event) => {
          this.setState({
              cid: event.target.value
          }) 
      }

      handleVinChange = (event) => {
        this.setState({
            vin: event.target.value
        }) 
    }

    handleDidChange = (event) => {
        this.setState({
            did: event.target.value
        }) 
    }

    // handleEidChange = (event) => {
    //     this.setState({
    //         eid: event.target.value
    //     }) 
    // }


    handleSubmit = (event) => {
        fetch('http://localhost:3001/addVehicle', {
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
                    <h4 className='col-sm-3 offset-sm-4 text-center'>Add Vehicle</h4>
                    <button className='col-sm-1 btn btn-secondary btn-sm offset-sm-3' onClick={this.props.closePopup}>X</button>
                </div>
                <div className='row'>
                    <p className='col-sm-12 text-center'>Make sure to add the correct information! </p>
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
                        <label>CID (Customer ID)
                        <input className="text-field" type="text"  placeholder="123" name="cid" value={this.state.cid} onChange={this.handleCidChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Last Name Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>VIN (Vehcile ID)
                        <input className="text-field" type="text"  placeholder="213" name="vin" value={this.state.vin} onChange={this.handleVinChange} required></input>
                        </label>
                    </div>
                </div>
                </div>

                <div className="row">
                {/* Email Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>DID (Dealership ID)
                        <input className="text-field" type="text"  placeholder="213" name="did" value={this.state.did} onChange={this.handleDidChange} required></input>
                        </label>
                    </div>
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

export default StockPopup;