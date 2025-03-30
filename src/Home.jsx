import { useState } from 'react';
import BalancingPlot from './Components/BalancingPlot'
import Sliders from './Components/Sliders';

import { Context, Container } from '../CommmonStyles';

import 'bootstrap-css-only/css/bootstrap.min.css';

const Home = () => {

  const [pBn, setPbN] = useState(10)
  const [pSn, setPsN] = useState(15)
  const [LS, setLs] = useState(15)
  const [LB, setLb] = useState(25)
  const [energy, setEnergy] = useState([0,5,10,15,20,25,30])
  const [price, setPrice] = useState([2,2,10,17,27,32,37])
  
  return (
      <Context>
        <Container>
          <div className='d-flex justify-content-center'>
            <h5>Balancing Market Auction</h5>
            <p>Market Clearing Price = {LB} [EUR]</p>
            <p>Balancing Market Price = {LS} [EUR]</p>
           </div>
        <div className='row m-0 justify-content-center' >
          <BalancingPlot
          pBn={pBn}
          pSn={pSn}
          LS={LS}
          LB={LB}
          />
        </div>
        <div className='row m-0 justify-content-center' >
         <Sliders
          pBn={pBn}
          pSn={pSn}
          setPbN={setPbN}
          setPsN={setPsN}
          setLs={setLs}
          setPb={setLb}
          energy={energy}
          price={price}
          /> 
        </div>
        </Container>
       
          
        </Context>
  );
}

export default Home;
