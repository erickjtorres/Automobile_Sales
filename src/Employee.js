import React, {Component} from 'react';
import InfoTable from './InfoTable';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eid: '',
            history: [],
            stock: []
          }
      }

      getHistory = (data) => {
        fetch('http://localhost:3001/sales', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then((response) => response.json())
          .then((object) => this.setState({
            history: object}))
          .catch(err => console.error(err))
      } 

      getStock = (data) => {
        fetch('http://localhost:3001/stock', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then((response) => response.json())
          .then((object) => this.setState({
            stock: object}))
          .catch(err => console.error(err))
      } 

    render() {
        this.getHistory(this.state);
        this.getStock(this.state);
        return (
            <div>
                <div className='row'>
                    <h4 className='text-white col-sm-6' >Sale History</h4>
                </div>
                <InfoTable data={this.state.history}/>
                <div className='row'>
                    <h4 className='text-white col-sm-6' >Vehicle Stock</h4>
                </div>
                <InfoTable data={this.state.stock}/>
            </div>
        );
    }
}

export default Employee;