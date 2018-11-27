import React, {Component} from 'react';
import InfoTable from './InfoTable';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
          }
      }
    render () {
        return (
            <div>
            <div className='row'>
            <h4 className='text-white col-sm-6'>Purchases</h4>
            </div>
            <InfoTable />
            </div>
        );
    } 
}

export default Customer;