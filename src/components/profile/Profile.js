import React, { Component } from 'react';
import './Profile.css';

class NavBar extends Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="Account">
            <div className="Account-title">
                <img className="Account-avatar" src={require('./wr.png')} />
            </div>
            <div className="Account-display-name">
                <div className="Account-me">
                    <span className="Account-name">Jane Doe</span>
                    <img className="Account-edit" src={require('./edit.svg')} />
                </div>
            </div>
            <div className="Account-controls">
                <span className="Account-control" >Change Password</span>
                <span className="Account-control" >Add Friends</span>
                <span className="Account-control" >Form Teams</span>
                <span className="Account-control" >Settings</span>
                <span className="Account-control" >Support</span>
                <span className="Account-control" >Logout</span>
            </div>

        </div>
    };

}

export default NavBar;
