import React, { Component } from 'react';
import './Navbar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="NavBar-table">
                <tbody>
                <tr>
                    <td align="center" onClick={() => {this.props.setSelected(0)}}>
                        {this.props.selected === 0
                            ? <div className="selected"><img className="NavBar-icon" src={require('./home.svg')} /></div>
                            : <img className="NavBar-icon" src={require('./home.svg')} />}
                    </td>
                    <td align="center" onClick={() => {this.props.setSelected(1)}}>
                        {this.props.selected === 1
                            ? <div className="selected"><img className="NavBar-icon" src={require('./signature.svg')} /></div>
                            : <img className="NavBar-icon" src={require('./signature.svg')} />}
                    </td>
                    <td align="center" onClick={() => {this.props.setSelected(2)}}>
                        {this.props.selected === 2
                            ? <div className="selected"><img className="NavBar-icon" src={require('./payment.svg')} /></div>
                            : <img className="NavBar-icon" src={require('./payment.svg')} />}
                    </td>
                    <td align="center" onClick={() => {this.props.setSelected(3)}}>
                        {this.props.selected === 3
                            ? <div className="selected"><img className="NavBar-icon" src={require('./stats.svg')} /></div>
                            : <img className="NavBar-icon" src={require('./stats.svg')} />}
                    </td>
                    <td align="center" onClick={() => {this.props.setSelected(4)}}>
                        {this.props.selected === 4
                            ? <div className="selected"><img className="NavBar-icon" src={require('./account.svg')} /></div>
                            : <img className="NavBar-icon" src={require('./account.svg')} />}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default NavBar;
