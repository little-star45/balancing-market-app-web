import React, { useState, useEffect, useRef } from 'react'
import Plotly from 'plotly.js-dist'

const BalancingPlot = (props) => {

  const {pBn, pSn, LS, LB} = props

  const [dataPlot, setDataPlot] = useState([])
  const [layout, setLayout] = useState([])

  const plotRef = useRef(null);

  useEffect(()=>{
    setLayout({
      autosize: true,
      responsive: true,
      showlegend: false,
      // width: 600,
      // height: 400,
      xaxis: { 
        title: { text: 'Electricity Demand [GWh]' },
        rangemode: 'tozero'
      },
      yaxis: { 
        title: { text: 'Generator Price [EUR/MWh]' },
        rangemode: 'tozero'
      },
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
          // shadow background
          {
            type: 'rect',
            x0: pSn<pBn?pBn:pSn, // Pozycja lewej linii
            x1: pSn<pBn?pSn:pBn, // Pozycja prawej linii
            y0: 0, // Dolna granica
            y1: 30, // Górna granica
            fillcolor: 'rgba(132, 255, 0, 0.2)', // Kolor wypełnienia
            line: {
                width: 0 // Brak linii obramowania
            }
          }
          
      ]
  })
  },[LB, LS, pBn, pSn])

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

  window.onresize = function() {
    Plotly.Plots.resize(plotRef.current);
};

    return (
        <>
            {plotRef&&<div ref={plotRef} style={{width:'100%'}}/>}
        </>
    );
}

export default BalancingPlot;

