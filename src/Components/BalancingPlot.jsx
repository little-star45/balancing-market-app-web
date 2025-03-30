import React, { useState, useEffect, useRef } from 'react'
import Plotly from 'plotly.js-dist'

const BalancingPlot = (props) => {

  const {pBn, pSn, LS, LB, energy, price} = props

  const [dataPlot, setDataPlot] = useState([])
  const [layout, setLayout] = useState([])
  const [maxLineHeight, setMaxLineHeight] = useState(Math.max(...price))

  const plotRef = useRef(null);

  useEffect(()=>{
    setLayout({
      autosize: true,
      responsive: true,
      showlegend: false,
      // width: 600,
      // height: 400,
      xaxis: { 
        title: { 
          text: 'Electricity Demand [GWh]' },
        side: 'right',
        rangemode: 'tozero',
      },
      yaxis: { 
        title: { text: 'Generator Price [EUR/MWh]' },
        rangemode: 'tozero'
      },
      margin: {
        l: 50,
        r: 50,
        b: 40,
        t: 30,
        pad: 4
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
              color: '#E5989B',
              width: 4,
              dash:'dash'
            }
          },
          {
              type: 'line',
              x0: 0,
              y0: LS,
              x1: 30,
              y1: LS,
              line: {
                color: '#9578a4',
                width: 4,
                dash: 'dash'
              }
          },
          // shadow background
          {
            type: 'rect',
            x0: pSn<pBn?pBn:pSn, // Pozycja lewej linii
            x1: pSn<pBn?pSn:pBn, // Pozycja prawej linii
            y0: 0, // Dolna granica
            y1: maxLineHeight, // Górna granica
            fillcolor: 'rgba(182, 195, 168, 0.15)', // Kolor wypełnienia
            line: {
                width: 0 // Brak linii obramowania
            }
          }
      ],
      annotations: [
        {
          x: parseInt((pSn+pBn)/2),
          y: maxLineHeight+8,
          xref: 'x',
          yref: 'y',
          axref: 'x',
          ayref: 'y',
          text: `Excess demand ${Math.abs(pSn-pBn)} [GWh]`,
          font: {
            // family: 'Courier New, monospace',
            size: 16,
            weight:700,
            // color: '#010101',
          },
          showarrow: false,
          xanchor: 'center',
        },
        {
          x: pSn,
          y: maxLineHeight+10,
          xref: 'x',
          yref: 'y',
          axref: 'x',
          ayref: 'y',
          text: '',
          showarrow: true,
          arrowside:'start+end',
          arrowhead: 2,
          arrowwidth: 2,
          xanchor: 'right',
          ax: pBn,
          ay: maxLineHeight+10,
          font: {
            // family: 'Courier New, monospace',
            // size: 16,
            color: '#010101',
          },
          textposition: 'bottom center',
        },
      ]
  })
  },[LB, LS, pBn, pSn])

  useEffect(()=>{
    setDataPlot([{
    x: energy,
    y: price,
    mode: 'lines+markers',
    type: 'scatter',
    marker: { color: '#72BAA9', line:{
      color:'#006A71', width:2
    }},//'#9578a4'},
    line: {
      shape: 'vh',
      width: 5
    }
  },
  {
    x: [pBn, pBn],
    y: [0, maxLineHeight+3],
    type: 'scatter',
    marker: { color: '#DA9833', symbol:'circle'  },
    mode: 'lines+markers+text',
    name: 'pBn',
    text: ['','BAL'],
    textfont: {
      // family: 'Courier New, monospace',
      size: 16,
      weight:700,
      // color: '#010101',
    },
    textposition: 'top',
    line:{
      dash:'dot',
      width:3,
    }
    },
    {
    x: [pSn, pSn],
    y: [0, maxLineHeight+3],
    type: 'scatter',
    marker: { color: '#3C70A4', symbol:'circle'  },
    mode: 'lines+markers+text',
    name: 'pSn',
    text: ['','DAM'],
    textfont: {
      // family: 'Courier New, monospace',
      size: 16,
      weight:700,
      // color: '#010101',
    },
    textposition: 'top',
    line:{
      dash:'dot',
      width:3
    }
    },
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

