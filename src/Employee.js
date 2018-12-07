import React, {Component} from 'react';
import InfoTable from './InfoTable';
import SalesPopup from './SalesPopup';
import StockPopup from './StockPopup';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            stock: [],
            stockPopup: false,
            salesPopup: false
          }
      }

      getHistory = () => {
        let data = {eid: this.props.eid}
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

      getStock = () => {
        let data = {eid: this.props.eid}
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

      toggleStockPopup() {
        this.setState({
          stockPopup: !this.state.stockPopup
        });
      }
      toggleSalesPopup() {
        this.setState({
          salesPopup: !this.state.salesPopup
        });
      }

      componentDidMount() {
        console.log(this.state.stock);
        this.getHistory(this.state);
        this.getStock(this.state);
    
      }


    render() {
        return (
            <div>
                <div className='row'>
                    <h4 className='text-white col-sm-6' >Sale History</h4>
                    <button onClick={this.toggleSalesPopup.bind(this)} className='btn btn-primary btn-sm  col-sm-2  offset-sm-3'>Add Sale</button>
                </div>
                <InfoTable data={this.state.history} type='sl'/>
  
                <div className='row'>
                    <h4 className='text-white col-sm-6' >Vehicle Stock</h4>
                    <button onClick={this.toggleStockPopup.bind(this)} className='btn btn-primary btn-sm  col-sm-2  offset-sm-3'>Change Stock</button>
                </div>

                <InfoTable data={this.state.stock} type='st'/>

                {this.state.stockPopup ? 
            <StockPopup
              closePopup={this.toggleStockPopup.bind(this)}
            />
            : null
          }
          {this.state.salesPopup ? 
            <SalesPopup
              closePopup={this.toggleSalesPopup.bind(this)}
            />
            : null
          }
            </div>
        );
    }
}

export default Employee;