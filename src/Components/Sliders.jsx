import React, { useEffect, useRef } from 'react';
import { Slider, SliderTick,DemandInput, PriceTag } from '../CommmonStyles';

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
                  max={Math.max(...energy)}
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
                      y="5"
                      width="1"
                      height="5"
                      style={{fill:'grey'}}
                      key={tick}>
                      </SliderTick>
                    ))}
                    {Array.from({ length: 11 }, (_, i) => i).map((tick) => (
                      <SliderTick 
                      x={tick===10?`99%`: `${tick*10}%`}
                      y="5"
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

                <div className='col-1 '>
                  <div className='row'>
                    <div className='col-7'>
                      <DemandInput
                        borderColor="#DA9833"
                        type='number' 
                        value={pSn}
                        max={Math.max(...energy)}
                        min={0}
                        onChange={(e)=>
                          {
                            if(e.target.value!=""){
                              setPsN(parseFloat(e.target.value))
                              updateLine(parseFloat(e.target.value), setLs) 
                            }else{
                              setPsN(0)
                              updateLine(0, setLs)
                            }
                            
                          }
                        }
                        />
                    </div>
                    <div className='col-5'>
                      <p>[GWh]</p>
                    </div>
                  </div>


                  
                </div>
              <div className='col-4 pl-5 d-flex justify-content-end'><span>Market Clearing Price = </span> <PriceTag mainColor="#DA9833">{LS} [EUR]</PriceTag></div>
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
                  max={Math.max(...energy)}
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
                      y="5"
                      width="1"
                      height="5"
                      style={{fill:'grey'}}
                      key={tick}>
                      </SliderTick>
                    ))}
                    {Array.from({ length: 11 }, (_, i) => i).map((tick) => (
                      <SliderTick 
                      x={tick===10?`99%`: `${tick*10}%`}
                      y="5"
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
                  
                <div className='col-1 '>
                  <div className='row'>
                    <div className='col-7'>
                      <DemandInput
                        borderColor="#3C70A4"
                        type='number' 
                        value={pBn}
                        max={Math.max(...energy)}
                        min={0}
                        onChange={(e)=>
                          {
                            if(e.target.value!=""){
                              setPbN(parseFloat(e.target.value))
                              updateLine(parseFloat(e.target.value), setPb) 
                            }else{
                              setPbN(0)
                              updateLine(0, setPb)
                            }
                            
                          }
                        }
                        />
                    </div>
                    <div className='col-5'>
                      <p>[GWh]</p>
                    </div>
                  </div>


                  
                </div>
                <div className='col-4 pl-5  d-flex justify-content-end'><span>Balancing Market Price = </span> <PriceTag mainColor="#3C70A4">{LB} [EUR]</PriceTag></div>
            </div>
          </>
    )
}

export default Sliders