import React, { Component } from 'react';
import './styles/InfoTableStyles.css'



class InfoTable extends Component {

    render() {
        if(this.props.type === 'c') { 
        let listItems = this.props.data.map((data) =>  
            <div className="row columns">
            <div className="col-sm-2 text-center">{data.DATE}</div> 
            <div className="col-sm-2 text-center">{data.VIN}</div> 
            <div className="col-sm-2 text-center">{data.FNAME}</div>
            <div className="col-sm-2 text-center">{data.BRAND}</div>
            <div className="col-sm-2 text-center">{data.MODEL}</div>
            <div className="col-sm-2 text-center">{data.COLOR}</div>
            <div className="col-sm-2 text-center">{data.EID}</div>
        </div>);
        return (
            <div>{listItems}</div>
        ); 
        } else if (this.props.type === 'sl') {
            let listItems = this.props.data.map((data) =>  
            <div className="row columns">
            <div className="col-sm-2 text-center">{data.DATE}</div> 
            <div className="col-sm-2 text-center">{data.BRAND}</div> 
            <div className="col-sm-2 text-center">{data.MODEL}</div>
            <div className="col-sm-2 text-center">{data.CID}</div>
            <div className="col-sm-2 text-center">{data.VIN}</div>
            <div className="col-sm-2 text-center">{data.COLOR}</div>
        </div>);
         return (
            <div>{listItems}</div>
        ); 
        } else if (this.props.type === 'st') {
            let listItems = this.props.data.map((data) =>  
            <div className="row columns">
            <div className="col-sm-2 text-center">{data.VIN}</div> 
            <div className="col-sm-2 text-center">{data.COLOR}</div> 
            <div className="col-sm-2 text-center">{data.BRAND}</div>
            <div className="col-sm-2 text-center">{data.MODEL}</div>
        </div>);
            return (
                <div>{listItems}</div>
            ); 
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default InfoTable;