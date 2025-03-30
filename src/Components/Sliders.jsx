import React, { useEffect, useRef } from 'react';

const Sliders = (props)=>{

    const {pBn, pSn, setPbN, setPsN, setLs, setPb, energy, price} = props
    

    const updateLine=(e, setFunc)=>{
        var idx = energy.findIndex(ele=> ele >= e)
        if (idx!=-1){
          setFunc(price[idx])
        }
    }

    return (
        <>
            <div className='row m-0 p-0 align-items-baseline'>
              <div className='col-3 '><p>Demand Day-Ahead</p></div>
              <div className='col-7'><input
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
              <div className='col-2 '><p>{pSn} [GWh]</p></div>
            </div>

            <div className='row m-0 align-items-baseline'>
              <div className='col-3'><p>Demand Balancing (pBn)</p></div>
              <div className='col-7'><input
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
                  /></div>
                <div className='col-2 '><p>{pBn} [GWh]</p></div>
            </div>
          </>
    )
}

export default Sliders