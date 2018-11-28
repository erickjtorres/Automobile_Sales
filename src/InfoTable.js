import React, { Component } from 'react';
import './styles/InfoTableStyles.css'


const data = [{DATE: 'DATE', VIN: 'VIN', DID: 'DID', BRAND: 'BRAND', MODEL: 'MODEL', COLOR:'COLOR'},
{DATE: '11/23/2010', VIN: '1232', DID: '123123', BRAND: 'TESLA', MODEL: 'Model X', COLOR: 'RED'},
{DATE: '11/23/2010', VIN: '1232', DID: '123123', BRAND: 'TESLA', MODEL: 'Model X', COLOR: 'RED'}];
const listItems = data.map((data) =>  
<div className="row columns">
<div className="col-sm-2 text-center">{data.DATE}</div> 
<div className="col-sm-2 text-center">{data.VIN}</div> 
<div className="col-sm-2 text-center">{data.DID}</div>
<div className="col-sm-2 text-center">{data.BRAND}</div>
<div className="col-sm-2 text-center">{data.MODEL}</div>
<div className="col-sm-2 text-center">{data.COLOR}</div>
</div>);
class InfoTable extends Component {
    
    render() {
        return (
            <div>{listItems}</div>
        ); 
    }
}

export default InfoTable;