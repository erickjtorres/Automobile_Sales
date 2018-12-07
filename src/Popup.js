import React, {Component} from 'react';
import './styles/Popupstyles.css';


class Popup extends Component {
    render() {
        return (
        <div className='popup'>
            <div className='popup_inner'>
                <div className='row'>
                    <h4 className='col-sm-3 offset-sm-4 text-center'>Personal Info</h4>
                    <button className='col-sm-1 btn btn-secondary btn-sm offset-sm-3' onClick={this.props.closePopup}>X</button>
                </div>
                <div className='row'>
                    <p className='col-sm-12 text-center'>Current information are within the text fields. Only submit if you want to this to change!</p>
                </div>

            </div>
      </div>
        );
    }
}

export default Popup;