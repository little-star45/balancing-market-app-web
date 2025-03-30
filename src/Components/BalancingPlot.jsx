import React, { useState, useEffect, useRef } from 'react'
import Plotly from 'plotly.js-dist'

const BalancingPlot = (props) => {

  const {pBn, pSn, LS, LB} = props

  const [dataPlot, setDataPlot] = useState([])
  const [layout, setLayout] = useState([])

  const plotRef = useRef(null);

  useEffect(()=>{
    setLayout({
      width: 600,
      height: 400,
      xaxis: { title: { text: 'Electricity Demand [GWh]' }},
      yaxis: { title: { text: 'Generator Price [EUR/MWh]' }},
      shapes: [
     
          //Line Horizontal
          {
            type: 'line',
            x0: 0,
            y0: LB,
            x1: 30,
            y1: LB,
            line: {
              color: 'rgb(50, 68, 171)',
              width: 2,
            }
          },
          {
              type: 'line',
              x0: 0,
              y0: LS,
              x1: 30,
              y1: LS,
              line: {
                color: 'rgb(50, 96, 171)',
                width: 2,
              }
            },
      ]
  })
  },[LB, LS])

  useEffect(()=>{
    setDataPlot([{
    x: [0,5,10,15,20,25,30],
    y: [2,2,10,17,27,32,37],
    mode: 'lines+markers',
    type: 'scatter',
    marker: { color: 'red' },
    line: {shape: 'vh'}
  },
  {
    x: [pBn, pBn],
    y: [0, 30],
    type: 'scatter',
    mode: 'lines',
    name: 'pBn'
    },
    {
    x: [pSn, pSn],
    y: [0, 30],
    type: 'scatter',
    mode: 'lines',
    name: 'pSn'
    },
// {
//     // show horizontal lines titles in this points
//     x: [2, 3.5],
//     y: [1, 1.5],
//     text: ['Vertical Line1', 'Vertical Line1'],
//     mode: 'text'
//   }
])
  }, [pBn, LS, LB, pSn])

  useEffect(()=>{
    if (plotRef.current){
    // var out = Plotly.validate(data, layout);
    // console.log(out)
      Plotly.newPlot(plotRef.current, dataPlot, layout)
      console.log(plotRef)
    }
  },[])

  useEffect(()=>{
    console.log('here')
    Plotly.react(plotRef.current, dataPlot, layout)
  },[dataPlot, layout])

    return (
        <div style={{width:'100%', height:'100%'}}>
            {plotRef&&<div ref={plotRef} style={{ width: '100%', height: '100%' }} />}
        </div>
    );
}

export default BalancingPlot;

