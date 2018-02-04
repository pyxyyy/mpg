import React, { Component } from 'react';
import './History.css';
import Transaction from "../transaction/Transaction";

class History extends Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="History">
            <Transaction avatar={require('./wr.png')} amount={- 103.41} msg={"Chicken Nuggets at McDonald’s"}/>
            <Transaction avatar={require('./wr.png')} amount={- 50.00} msg={"hello"}/>
            <Transaction avatar={require('./wr.png')} amount={23.20} msg={"goodblye"}/>
            <Transaction avatar={require('./wr.png')} amount={23.20} msg={"hi"}/>
            <Transaction avatar={require('./wr.png')} amount={23.20} msg={"hey"}/>
        </div>
    };

}

export default History;
