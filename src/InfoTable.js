import React, { Component } from 'react';
import './styles/InfoTableStyles.css'



class InfoTable extends Component {

    render() {
        const listItems = this.props.data.map((data) =>  
        <div className="row columns">
        <div className="col-sm-2 text-center">{data.DATE}</div> 
        <div className="col-sm-2 text-center">{data.VIN}</div> 
        <div className="col-sm-2 text-center">{data.DID}</div>
        <div className="col-sm-2 text-center">{data.BRAND}</div>
        <div className="col-sm-2 text-center">{data.MODEL}</div>
        <div className="col-sm-2 text-center">{data.COLOR}</div>
        </div>);
        return (
            <div>{listItems}</div>
        ); 
    }
}

export default InfoTable;