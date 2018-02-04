import React, { Component } from 'react';
import './Transaction.css';

class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Transaction">
             <img className="Transaction-avatar" src={this.props.avatar}/>
            <span className="Transaction-date">{this.props.date}</span>
            <span className="Transaction-message">{this.props.msg}</span>
            <span className="Transaction-amount">{(this.props.amount).toFixed(2)}</span>
            <span className={this.props.tagFood ? "Tag tfood" : "Tag trent"}>{this.props.tagFood ? "Food" : "Rent"}</span>
            <div className="Transaction-line"></div>
            <img className="Transaction-verify" src={require('./doubletick.svg')} />
            <img className="Transaction-thumb" src={require('./thumb.svg')} />
            <img className="Transaction-comment" src={require('./comment.svg')} />
        </div>
    };
}

export default Transaction;