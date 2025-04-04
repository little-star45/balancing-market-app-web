import React, { useState, useEffect, useRef, useContext } from 'react'
import Plotly from 'plotly.js-dist'
import { MainContext } from './MainContext';

const BalancingPlot = () => {

  const {pBn, pSn, LS, LB, energy, price} = useContext(MainContext);

  const [dataPlot, setDataPlot] = useState([])
  const [layout, setLayout] = useState([])
  const [maxLineHeight, setMaxLineHeight] = useState(Math.max(...price))

  const plotRef = useRef(null);

  useEffect(()=>{
    setLayout({
      autosize: true,
      responsive: true,
      showlegend: false,
      font: {
        family: 'Raleway, sans-serif',
        size: 16,
        // color: '#7f7f7f'
      },
      // width: 600,
      // height: 400,
      xaxis: { 
        title: { 
          text: 'Electricity Demand [GWh]',
          standoff: 20
        },
        side: 'right',
        rangemode: 'tozero',
      },
      yaxis: { 
        title: { text: 'Generator Price [EUR/GWh]' ,
        standoff: 20
        },
        rangemode: 'tozero'
      },
      margin: {
        // l: 60,
        // r: 50,
        b: 60,
        t: 30,
        pad: 2
      },
      shapes: [
     
          //Line Horizontal
          {
            type: 'line',
            x0: 0,
            y0: LS,
            x1: Math.max(...energy),
            y1: LS,
            line: {
              color: '#E5989B',
              width: 4,
              dash:'dash'
            }
          },
          {
              type: 'line',
              x0: 0,
              y0: LB,
              x1: Math.max(...energy),
              y1: LB,
              line: {
                color: '#9578a4',
                width: 4,
                dash: 'dash'
              }
          },
          // shadow background
          {
            type: 'rect',
            x0: pSn<pBn?pBn:pSn, // left line pos
            x1: pSn<pBn?pSn:pBn, // right line pos
            y0: 0, // bottom constrain
            y1: maxLineHeight, // top constrain
            fillcolor: 'rgba(182, 195, 168, 0.15)',
            line: {
                width: 0 // without border
            }
          }
      ],
      annotations: [
        {
          x: Math.max(...energy)*1.05,
          y: LB,
          xref: 'x',
          yref: 'y',
          text: 'BMP',
          showarrow: false,
          font: {
              size: 12,
              color: '#9578a4',
              weight: 'bold'
          },
          xanchor: 'right',
          yanchor: 'middle'
      },
      {
        x: Math.max(...energy)*1.05,
        y: LS,
        xref: 'x',
        yref: 'y',
        text: 'MCP',
        showarrow: false,
        font: {
            size: 12,
            color:'#E5989B' ,
            weight: 'bold'
        },
        xanchor: 'right',
        yanchor: 'middle'
      },
        {
          x: parseInt((pSn+pBn)/2),
          y: maxLineHeight+8,
          xref: 'x',
          yref: 'y',
          axref: 'x',
          ayref: 'y',
          text: pSn>pBn?`Excess demand ${Math.abs(pSn-pBn)} [GWh]`: pSn===pBn?'':`Excess production ${Math.abs(pSn-pBn)} [GWh]`,
          font: {
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
            color: '#010101',
          },
          textposition: 'bottom center',
        },
      ]
  })
  
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
    marker: { color: '#3C70A4', symbol:'circle'  },
    mode: 'lines+markers+text',
    name: 'pBn',
    text: ['','BAL'],
    textfont: {
      size: 16,
      weight:700,
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
    marker: { color: '#DA9833', symbol:'circle'},
    mode: 'lines+markers+text',
    name: 'pSn',
    text: ['','DAM'],
    textfont: {
      size: 16,
      weight:700,
    },
    textposition: 'top',
    line:{
      dash:'dot',
      width:3
    }
    },
  ])
  },[LB, LS, pBn, pSn, energy])


  useEffect(()=>{
    if (plotRef.current){
    // var out = Plotly.validate(data, layout);
    // console.log(out)
      Plotly.newPlot(plotRef.current, dataPlot, layout)
    }
  },[])

  useEffect(()=>{
    Plotly.react(plotRef.current, dataPlot, layout)
  },[dataPlot, layout])

  window.onresize = function() {
    Plotly.Plots.resize(plotRef.current);
};

    return (
        <>
            {plotRef&&<div ref={plotRef} style={{width:'100%', height:'auto'}}/>}
        </>
    );
}

export default BalancingPlot;

