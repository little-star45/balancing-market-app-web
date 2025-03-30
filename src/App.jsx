import { useState } from 'react';
import './App.css'
import BalancingPlot from './Components/BalancingPlot'
import Sliders from './Components/Sliders';

import 'bootstrap-css-only/css/bootstrap.min.css';

function App() {

  const [title, setTitle] = useState('Balancing Market Auction Market Clearing Price = 17 [EUR] Balancing Market Price = 32 [EUR]')
  const [pBn, setPbN] = useState(10)
  const [pSn, setPsN] = useState(15)
  const [LS, setLs] = useState(15)
  const [LB, setLb] = useState(25)
  const [energy, setEnergy] = useState([0,5,10,15,20,25,30])
  const [price, setPrice] = useState([2,2,10,17,27,32,37])
  
  return (
      <div className='d-flex text-wrap'>
        <div className='col'>
           <div className='row'>
          <h5>{title}</h5>
        </div>
        <div className='row'>
          <BalancingPlot
          title={title}
          pBn={pBn}
          pSn={pSn}
          LS={LS}
          LB={LB}
          />
        </div>
        <div className='row'>
         <Sliders
          pBn={pBn}
          pSn={pSn}
          setPbN={setPbN}
          setPsN={setPsN}
          setLs={setLs}
          setPb={setLb}
          energy={energy}
          price={price}
          LS={LS}
          /> 
        </div>
        </div>
       
          
        </div>
  );
}

export default App;
