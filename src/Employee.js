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
            salesPopup: false,
            vin: ''
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

      handleSubmit = (event) => {
        fetch('http://localhost:3001/deletevehicle', {
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

    handleVinChange = (event) => {
      this.setState({
          vin: event.target.value
      }) 
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
        // console.log(this.state.stock);
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

          <form onSubmit={this.handleSubmit}>
                
                {/* First Name Submission */}
                <div className="col-sm-1 offset-sm-1">
                    <div className="row">
                        <label className='text-white'>Delete Vehicle
                        <input className="text-field" type="text"  placeholder="VIN" name="vin" value={this.state.vin} onChange={this.handleVinChange} required></input>
                        </label>
                        </div>
                </div>

                <div className="col-sm-1 offset-sm-2">
                <input className="button" type="submit" value="Delete" />
                </div>

          </form>
            </div>

        );
    }
}

export default Employee;