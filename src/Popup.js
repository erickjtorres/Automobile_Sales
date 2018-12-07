import React, {Component} from 'react';
import './styles/Popupstyles.css';


class Popup extends Component {
    render() {
        return (
        <div className='popup'>
            <div className='popup_inner'>
                <div className='row'>
                    <h1 className='col-sm-4'>Personal Info</h1>
                    <button className='col-sm-4'> onClick={this.props.closePopup}>Exit</button>
                </div>
            </div>
      </div>
        );
    }
}

export default Popup;