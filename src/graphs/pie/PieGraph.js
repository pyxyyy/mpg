import React, { Component } from 'react';
import {PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    {name: 'Group A', value: 80}, {name: 'Group B', value: 130}, {name: 'Group D', value: 482}, {name: 'Group E', value: 281}];
const COLORS = ['#9e577b', '#956f9c', '#737fa2', '#5791ba'];

const RADIAN = Math.PI / 180;
class PieGraph extends Component {
    render () {
        return (
            <PieChart width={200} height={180} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={100}
                    cy={80}
                    innerRadius={65}
                    outerRadius={80}
                    paddingAngle={3}
                >
                    {
                        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} fillOpacity={0.8}/>)
                    }
                </Pie>
            </PieChart>
        );
    }
}

export default PieGraph;