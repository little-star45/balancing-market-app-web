import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist-min';

const BalancingPlot = (props) => {

    const {title, pBn, pSn, LS, LB} = props

    const plotRef = useRef(null); // Referencja do elementu DOM

    useEffect(() => {
        const data = [{
            x: [0,5,10,15,20,25,30],
            y: [2,2,10,17,27,32,37],
            mode: 'lines+markers',
            type: 'scatter',
            marker: { color: 'red' },
            line: {shape: 'hv'}
        },
        {
            x: [pBn, pBn],
            y: [0, 30],
            type: 'scatter',
            mode: 'lines'
          },
          {
            x: [pSn, pSn],
            y: [0, 30],
            type: 'scatter',
            mode: 'lines'
          },
        {
            // show horizontal lines titles in this points
            x: [2, 3.5],
            y: [1, 1.5],
            text: ['Vertical Line1', 'Vertical Line1'],
            mode: 'text'
          }];

        const layout = {
            width: 600,
            height: 400,
            xaxis: { title: { text: 'Electricity Demand [GWh]' }},
            yaxis: { title: { text: 'Generator Price [EUR/MWh]' }},
            shapes: [
           
                //Line Horizontal
                {
                  type: 'line',
                  x0: 0,
                  y0: {LB},
                  x1: 30,
                  y1: {LB},
                  line: {
                    color: 'rgb(50, 68, 171)',
                    width: 2,
                  }
                },
                {
                    type: 'line',
                    x0: 0,
                    y0: {LS},
                    x1: 30,
                    y1: {LS},
                    line: {
                      color: 'rgb(50, 96, 171)',
                      width: 2,
                    }
                  },
            ]
        }

        Plotly.newPlot(plotRef.current, data, layout);

    }, [pBn, pSn]);

    return (
        <div>
            {plotRef&&<div ref={plotRef} style={{ width: '100%', height: '100%' }} />}
        </div>
    );
}

export default BalancingPlot;

