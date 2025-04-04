import BalancingPlot from './Components/BalancingPlot'
import Sliders from './Components/Sliders';
import React, {useState} from 'react';
import ModalPrice from './Components/ModalPrice';

import {MainContextProvider } from './Components/MainContext';

import { Main, Container, Container2, CustomTitle, GlobalStyle, Card, CommonAcceptBtn} from './CommmonStyles';

import 'bootstrap-css-only/css/bootstrap.min.css';

const Home = () => {

    
    const [modalToggle, setModalToggle] = useState(false)

    const modalToggleFunc = () =>{
        setModalToggle(!modalToggle)
    }

  
  return (
    <>
    <MainContextProvider>
        <GlobalStyle/>
        <Main>
            <Container2>
                <div className='row justify-content-center'>
                        <CustomTitle>Balancing Market Auction</CustomTitle>
                </div>
                <div className='row justify-content-center mb-1' style={{minHeight :'450px'}}>
                    <BalancingPlot/>
                </div>
                  
                <div className='row'>
                    <div className='col-12'>
                       <CommonAcceptBtn 
                       style={{width:'100%'}}
                    onClick={()=>modalToggleFunc()}
                    >Edit Energy/Prices</CommonAcceptBtn> 
                    </div>
                    
                </div>
                    
                <div className='row'>
                    <div className='col-2' style={{paddingLeft:'50px'}}><b>Demand</b></div>
                    <div className='col-7'></div>
                    <div className='col-3'><b>Price</b></div>
                </div>
                <div className='row mt-1 justify-content-center flex-column flex-nowrap' >
                    <Sliders/>
                </div>
                {modalToggle&&
                <ModalPrice
                toggle={modalToggleFunc}
                />
                }
            </Container2>
        </Main>
    </MainContextProvider>
    </>
  );
}

export default Home;
