import React, { useEffect, useRef } from 'react';
import { Slider, SliderTick } from '../CommmonStyles';

const Sliders = (props)=>{

    const {pBn, pSn, setPbN, setPsN, setLs, setPb, energy, price, LB, LS } = props
    

    const updateLine=(e, setFunc)=>{
        var idx = energy.findIndex(ele=> ele >= e)
        if (idx!=-1){
          setFunc(price[idx])
        }
    }

    return (
        <>
            <div className='row m-0 mb-4 p-0 align-items-center'>
              <div className='col-2 '><p style={{fontWeight: 'bold'}}>Demand Day-Ahead</p></div>
              <div className='col-5'>
                <div className='row'>
                  <Slider
                  sliderColor="#DA9833"
                  style={{width: '100%'}}
                  type="range" 
                  min="0" 
                  max="40"
                  step='1' 
                  value={pSn}
                  onChange={(e)=>
                    {
                    setPsN(parseInt(e.target.value))
                    updateLine(parseInt(e.target.value), setLs)
                  }
                  }/>
                </div>
                <div className='row px-3'>
                  <svg role="presentation" width="100%" height="15" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 100 }, (_, i) => i).map((tick) => (
                      <SliderTick 
                      x={`${tick*1}%`}
                      y="3"
                      width="1"
                      height="5"
                      style={{fill:'grey'}}
                      key={tick}>
                      </SliderTick>
                    ))}
                    {Array.from({ length: 11 }, (_, i) => i).map((tick) => (
                      <SliderTick 
                      x={tick===10?`99%`: `${tick*10}%`}
                      y="3"
                      width="1"
                      height="10"
                      key={tick}>
                      </SliderTick>
                    ))}
                  </svg>
                  {/* <svg role="presentation" width="100%" height="14" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 11 }, (_, i) => i*Math.ceil(40/10)).map((tick, idx) => (
                    <text 
                    x={idx===10?`100%`: `${idx*10}%`}
                    y="14"
                    text-anchor={idx===0?"start": "middle"}
                    key={tick}
                    style={{fontWeight: 'bold'}}>
                      {tick}</text>
                  ))}
                  </svg> */}
                </div>
                </div>

              <div className='col-1 '><p>{pSn} [GWh]</p></div>
              <div className='col-4 pl-5'><p>Market Clearing Price = {LB} [EUR]</p></div>
            </div>

            <div className='row m-0 align-items-center'>
              <div className='col-2'><p style={{fontWeight: 'bold'}}>Demand Balancing</p></div>
              <div className='col-5'>
              <div className='row'>
                <Slider
                  sliderColor="#3C70A4"
                  style={{width: '100%'}}
                  type="range" 
                  min="0" 
                  max="40"
                  step='1' 
                  value={pBn}
                  onChange={(e)=>
                    {
                      setPbN(parseInt(e.target.value))
                      updateLine(parseInt(e.target.value), setPb)
                    }
                  }
                  />
                </div>  
                <div className='row px-3'>
                  <svg role="presentation" width="100%" height="15" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 100 }, (_, i) => i).map((tick) => (
                      <SliderTick 
                      x={`${tick*1}%`}
                      y="3"
                      width="1"
                      height="5"
                      style={{fill:'grey'}}
                      key={tick}>
                      </SliderTick>
                    ))}
                    {Array.from({ length: 11 }, (_, i) => i).map((tick) => (
                      <SliderTick 
                      x={tick===10?`99%`: `${tick*10}%`}
                      y="3"
                      width="1"
                      height="10"
                      key={tick}>
                      </SliderTick>
                    ))}
                  </svg>
                  {/* <svg role="presentation" width="100%" height="14" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 11 }, (_, i) => i*Math.ceil(40/10)).map((tick, idx) => (
                    <text 
                    x={idx===10?`98%`: `${idx*10}%`}
                    y="14"
                    text-anchor={idx===0?"start": "middle"}
                    key={tick}>
                      {tick}</text>
                  ))}
                  </svg> */}
                </div>
                </div>
                  
                <div className='col-1 '><p>{pBn} [GWh]</p></div>
                <div className='col-4 pl-5'><p>Balancing Market Price = {LS} [EUR]</p> </div>
            </div>
          </>
    )
}

export default Sliders