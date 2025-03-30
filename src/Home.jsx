import { useState } from 'react';
import BalancingPlot from './Components/BalancingPlot'
import Sliders from './Components/Sliders';

import { Context, Container, Container2, CustomTitle } from '../CommmonStyles';

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
        <Container2>
            <div className='row justify-content-center'>
                <div>
                    <div className='row'> <CustomTitle>Balancing Market Auction</CustomTitle> </div>
                </div>
            </div>
            <div className='row justify-content-center' style={{height:'450px'}}>
                <BalancingPlot
                pBn={pBn}
                pSn={pSn}
                LS={LS}
                LB={LB}
                energy={energy}
                price={price}
                />
            </div>
            <div className='row mt-5 justify-content-center flex-column flex-nowrap' >
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
                LB={LB}
                /> 
            </div>
        </Container2>
    </Context>
  );
}

export default Home;
