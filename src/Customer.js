import React, {Component} from 'react';
import InfoTable from './InfoTable';
import Popup from './Popup';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchases: [],
            cid: "",
            showpopup: false
          }
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
      getPurchases = (data) => {
        fetch('http://localhost:3001/purchases', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then((response) => response.json())
          .then((object) => this.setState({
            purchases: object}))
          .catch(err => console.error(err))
      }
    render () {
        this.getPurchases(this.props.cid)
        return (
            <div>
            <div className='row'>
            <h4 className='text-white col-sm-6' >Purchases</h4>
            <button className='btn btn-primary btn-sm  col-sm-2  offset-sm-3'>Change Account Info</button>
            </div>
            <InfoTable data={this.state.purchases}/>
            {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
            </div>
        );
    } 
}

export default Customer;