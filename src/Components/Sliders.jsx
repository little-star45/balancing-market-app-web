import React, { useEffect, useRef } from 'react';

const Sliders = (props)=>{

    const {pBn, pSn, setPbN, setPsN, setLs, setPb, energy, price, LS} = props

    const updateLineDah=()=>{
            energy.forEach((ele, idx) => {
            if (ele >= pSn){
               console.log(price[idx], typeof price[idx], typeof LS, LS)
               setLs(price[idx])
            }
                
        });

        // for i in range(len(Energy)):
        //  if Energy[i] >= PS_N:
        //     LS = Price[i]

    }

    return (
        <div className='col'>
            <div className='row d-flex justify-content-between align-items-baseline'>
              <p>Demand Day-Ahead</p>
                <input
                  style={{width: '60%'}}
                  type="range" 
                  min="0" 
                  max="40"
                  step='1' 
                  value={pSn}
                  onChange={(e)=>
                    {setPsN(e.target.value)
                    updateLineDah(e)}
                  }/>
              <p>{pSn} [GWh]</p>
            </div>

            <div className='row d-flex justify-content-between align-items-baseline'>
              <p>Demand Balancing</p>
              <input 
                style={{width: '60%'}}
                type="range" 
                min="0" 
                max="40"
                step='1' 
                value={pBn}
                onChange={(e)=>setPbN(e.target.value)}
                />
              <p>{pBn} [GWh]</p>
            </div>
          </div>
    )
}

export default Sliders