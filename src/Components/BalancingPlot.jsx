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
            y1: maxLineHeight, // Górna granica
            fillcolor: 'rgba(132, 255, 0, 0.15)', // Kolor wypełnienia
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
            // size: 16,
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
          arrowside:'start',
          arrowhead: 3,
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
        // {
        //   x: pBn, // Położenie na osi X
        //   y: -0.2, // Ujemna wartość, aby umieścić tekst poniżej osi X
        //   type: 'scatter',
        //   mode: 'text',
        //   showarrow: false,
        //   yref: 'paper',
        //   text: 'BAL', // Tekst adnotacji
        //   textposition: 'bottom center', // Ustawienie pozycji tekstu
        //   textfont: {
        //       size: 12, // Rozmiar czcionki
        //   },
        // },
        // {
        //   x: 0.85,
        //   y: -0.15,
        //   xref: 'paper',
        //   yref: 'paper',
        //   text: 'Electricity Demand [GWh]',
        //   showarrow: false,
        //   xanchor: 'left',
        // },
        
      ]
  })
  },[LB, LS, pBn, pSn])

  useEffect(()=>{
    setDataPlot([{
    x: energy,
    y: price,
    mode: 'lines+markers',
    type: 'scatter',
    marker: { color: 'red' },
    line: {shape: 'vh'}
  },
  {
    x: [pBn, pBn],
    y: [0, maxLineHeight+5],
    type: 'scatter',
    mode: 'lines+text',
    name: 'pBn',
    text: ['','BAL'],
    textfont: {
      // family: 'Courier New, monospace',
      // size: 16,
      weight:700,
      // color: '#010101',
    },
    textposition: 'top',
    },
    {
    x: [pSn, pSn],
    y: [0, maxLineHeight+5],
    type: 'scatter',
    mode: 'lines+text',
    name: 'pSn',
    text: ['','DAM'],
    textfont: {
      // family: 'Courier New, monospace',
      // size: 16,
      weight:700,
      // color: '#010101',
    },
    textposition: 'top',
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

