import { useState } from 'react';
import BalancingPlot from './Components/BalancingPlot'
import Sliders from './Components/Sliders';
import {MainContextProvider } from './Components/MainContext';

import { Main, Container, Container2, CustomTitle, GlobalStyle} from './CommmonStyles';

import 'bootstrap-css-only/css/bootstrap.min.css';

const Home = () => {
  
  return (
    <>
    <MainContextProvider>
        <GlobalStyle/>
        <Main>
            <Container2>
                <div className='row justify-content-center'>
                    <div>
                        <div className='row'> <CustomTitle>Balancing Market Auction</CustomTitle> </div>
                    </div>
                </div>
                <div className='row justify-content-center' style={{height:'450px'}}>
                    <BalancingPlot/>
                </div>
                <div className='row'>
                    <div className='col-2' style={{paddingLeft:'50px'}}><b>Demand</b></div>
                    <div className='col-7'></div>
                    <div className='col-3'><b>Price</b></div>
                </div>
                <div className='row mt-1 justify-content-center flex-column flex-nowrap' >
                    <Sliders/>
                </div>
            </Container2>
        </Main>
    </MainContextProvider>
    </>
  );
}

export default Home;
