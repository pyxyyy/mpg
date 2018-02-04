import React, { Component } from 'react';
import './Profile.css';

class NavBar extends Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="Account">
                <div className="bigcircle">
                    <img className="circle1-img" src={require('./wr.png')} />
                </div>
                <span className="john">
                    RAY LIAU
                    <span className="john-user">@rayliau</span>
                    <img className="star" src={require('./me.svg')} />
                </span>
                    <img className="Account-edit" src={require('./edit.svg')} />
            <div className="Account-controls">
                <span className="Account-control" >Manage bank account</span>
                <span className="Account-control" >Refer a friend</span>
                <span className="Account-control" >Settings</span>
                <span className="Account-control" >Support</span>
                <span className="Account-control" >Logout</span>
            </div>
            <span className="credits">WITH LOVE FROM ESFER</span>

        </div>
    };

}

export default NavBar;
