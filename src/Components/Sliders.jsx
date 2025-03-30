import React, { useEffect, useRef } from 'react';
import { Slider } from '../../CommmonStyles';

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
            <div className='row m-0 p-0 align-items-center'>
              <div className='col-2 '><p style={{fontWeight: 'bold'}}>Demand Day-Ahead</p></div>
              <div className='col-5'>
                <Slider
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
              <div className='col-1 '><p>{pSn} [GWh]</p></div>
              <div className='col-4 pl-5'><p>Market Clearing Price = {LB} [EUR]</p></div>
            </div>

            <div className='row m-0 align-items-center'>
              <div className='col-2'><p style={{fontWeight: 'bold'}}>Demand Balancing</p></div>
              <div className='col-5'>
                <Slider
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
                <div className='col-1 '><p>{pBn} [GWh]</p></div>
                <div className='col-4 pl-5'><p>Balancing Market Price = {LS} [EUR]</p> </div>
            </div>
          </>
    )
}

export default Sliders