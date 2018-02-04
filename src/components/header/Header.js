import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Header">
                {this.props.text}
            </div>
        );
    }
}

export default Header;
