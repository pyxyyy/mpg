import React, { Component } from 'react';
import './Transaction.css';

class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Transaction">
             <img className="Transaction-avatar" src={this.props.avatar}/>
            <span className="Transaction-message">{this.props.msg}</span>
            <span className="Transaction-amount">{(this.props.amount).toFixed(2)}</span>
            <div className="Transaction-line"></div>
        </div>
    };
}

export default Transaction;