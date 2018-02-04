import React, { Component } from 'react';
import {Area, AreaChart, Legend, XAxis, YAxis} from "recharts";

const colors = ["#9e577b", "#5791ba"];
const strokes = "white";

const data = [
    {name: 'M', in: 40.00, out: 24.00 },
    {name: 'T', in: 30.00, out: 13.90 },
    {name: 'W', in: 20.00, out: 98.00 },
    {name: 'T', in: 27.80, out: 39.08 },
    {name: 'F', in: 18.90, out: 48.00 },
    {name: 'S', in: 23.90, out: 38.00 },
    {name: 'S', in: 34.90, out: 43.00 },
];

class AreaGraph extends Component {
    renderLegend = (props) => {
        const {payload} = props;
        if (payload.length === 0)
            return null;

        const legend = payload.map((elem, idx) => {
            console.log(elem);
            return (
                <div className="AreaGraph-legend" key={"AreaGraph-legend-" + idx}>
                    <div className="AreaGraph-legend-color" style={{backgroundColor: colors[idx]}}/>
                    <span className="AreaGraph-legend-name">{elem.value}</span>
                </div>
            );
        });

        return (
            <div className="AreaGraph-legend-wrapper">
                {legend}
            </div>
        );
    };

    renderGraph = () => {
        return (
            <AreaChart width={370} height={150} data={data}
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <Area type='monotone' dataKey='out' stroke={strokes} fillOpacity={1} fill="url(#colorUv)"  />;
                <Area type='monotone' dataKey='in' stroke={strokes} fillOpacity={1} fill="url(#colorPv)"  />;
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9e577b" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#9e577b" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5791ba" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#5791ba" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <XAxis stroke="#808080"  dataKey="name"/>
                <YAxis stroke="#808080" />
            </AreaChart>
        );
    };


    render = () => {
        return <div className="AreaGraph">
            {this.renderGraph()}
        </div>;
    }

}

export default AreaGraph