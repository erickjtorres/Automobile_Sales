import React, {Component} from 'react';
import InfoTable from './InfoTable';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchases: [],
            cid: "Erick"
          }
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
        this.getPurchases(this.state)
        return (
            <div>
            <div className='row'>
            <h4 className='text-white col-sm-6' >Purchases</h4>
            </div>
            <InfoTable data={this.state.purchases}/>
            </div>
        );
    } 
}

export default Customer;