import React, {Component} from 'react';
import './styles/Popupstyles.css';


class StockPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: '',
            did: '',
            color: '',
            brand: '',
            model: ''
            // eid: this.props.eid
          }
      }

      handleVinChange = (event) => {
          this.setState({
              vin: event.target.value
          }) 
      }

      handleColorChange = (event) => {
        this.setState({
            color: event.target.value
        }) 
    }

    handleBrandChange = (event) => {
        this.setState({
            brand: event.target.value
        }) 
    }

    handleModelChange = (event) => {
        this.setState({
            model: event.target.value
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
        fetch('http://localhost:3001/addvehicle', {
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
                    <p className='col-sm-12 text-center'>Make sure to add the correct information!</p>
                </div>
                <form className="signform customerpadding" onSubmit={this.handleSubmit}>
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2 black_bottom"></div>
                </div>
                <div className="row">
                {/* VIN Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>VIN (Vehicle ID)
                        <input className="text-field" type="text"  placeholder="123" name="vin" value={this.state.vin} onChange={this.handleVinChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Color Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Color
                        <input className="text-field" type="text"  placeholder="blue" name="color" value={this.state.color} onChange={this.handleColorChange} required></input>
                        </label>
                    </div>
                </div>
                </div>

                <div className="row">
                {/* Brand Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Brand
                        <input className="text-field" type="text"  placeholder="Tesla" name="brand" value={this.state.brand} onChange={this.handleBrandChange} required></input>
                        </label>
                    </div>
                </div>

                {/* Model Submission */}
                <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Model
                        <input className="text-field" type="text"  placeholder="Tesla" name="model" value={this.state.model} onChange={this.handleModelChange} required></input>
                        </label>
                    </div>
                </div>
                </div>
                 {/* DID Submission */}
                 <div className="col-sm-4 offset-sm-1">
                    <div className="row email">
                        <label>Dealer # (DID)
                        <input className="text-field" type="text"  placeholder="21312" name="did" value={this.state.did} onChange={this.handleDidChange} required></input>
                        </label>
                    </div>
                </div>

                <div className="col-sm-6 offset-sm-3">
                <input className="buttons" type="submit" value="Add Vehicle" />
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