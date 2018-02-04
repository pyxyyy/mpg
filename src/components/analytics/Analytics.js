import React, { Component } from 'react';
import './Analytics.css';
import AreaGraph from "../../graphs/area/AreaGraph";
import PieGraph from "../../graphs/pie/PieGraph";

class Analytics extends Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="Analytics">

            <div className="Analytics-net-desc">THIS WEEK'S NET FLOW</div>
            <div className="Analytics-net">- $141.21</div>

            <AreaGraph />
            <div className="Legend">
                <div className="Legend-group">
                    <div className="Legend-received" />
                    <span>Received</span>
                </div>
                <div className="Legend-group">
                    <div className="Legend-sent" />
                    <span>Sent</span>
                </div>
            </div>


            <div className="Analytics-net-desc marginTop marginBottom">THIS MONTH'S NET EXPENDITURE</div>
            <PieGraph />
            <div className="Legend-2">
                <div className="Legend-group-squeeze">
                    <div className="Legend-food" />
                    <span>Food</span>
                </div>
                <div className="Legend-group-squeeze">
                    <div className="Legend-transport" />
                    <span>Transport</span>
                </div>
                <div className="Legend-group-squeeze">
                    <div className="Legend-rent" />
                    <span>Rent</span>
                </div>
                <div className="Legend-group-squeeze">
                    <div className="Legend-fun" />
                    <span>Fun</span>
                </div>
            </div>

        </div>
    };

}

export default Analytics;
