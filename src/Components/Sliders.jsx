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
            <div className='row mb-0 justify-content-between align-items-baseline' style={{width:'100%'}}>
              <p>Demand Day-Ahead (pSn)</p>
                <input
                  style={{width: '60%'}}
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
              <p>{pSn} [GWh]</p>
            </div>

            <div className='row mb-0 justify-content-between align-items-baseline'>
              <p>Demand Balancing (pBn)</p>
              <input 
                style={{width: '60%'}}
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
              <p>{pBn} [GWh]</p>
            </div>
          </>
    )
}

export default Sliders