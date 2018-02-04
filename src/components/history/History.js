import React, { Component } from 'react';
import './History.css';
import Transaction from "../transaction/Transaction";

class History extends Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="History">
            <Transaction avatar={require('./john.png')} amount={- 15.00} msg={"Chicken Nuggets at McDonald’s"} tagFood={true} date={"Just now"}/>
            <Transaction avatar={require('./dao.png')} amount={- 500.99} msg={"shelter and warmth"} tagFood={false} date={"Today, 12.51PM"}/>
            <Transaction avatar={require('./dao.png')} amount={23.20} msg={"gettin sum sustenance"} tagFood={true} date={"Today, 3.10AM"}/>
            <Transaction avatar={require('./crystal.png')} amount={23.20} msg={"pizza @ john's"} tagFood={true} date={"Yesterday, 11.22PM"}/>
            <Transaction avatar={require('./kate.png')} amount={23.20} msg={"Pizza"} tagFood={true} date={"Yesterday, 11.21PM"}/>
        </div>
    };
}

export default History;
