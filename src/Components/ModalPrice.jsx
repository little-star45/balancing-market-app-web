import React, {useState, useContext} from 'react';
import { CommonAcceptBtn} from '../CommmonStyles';

import { MainContext } from './MainContext';

import {
    NumberInput,
    MyModal, 
    AddButton,
    MainModalBodyDiv,
    } from '../Styles/ModalStyles';

import{
    ModalHeader,
    ModalFooter   
} from 'reactstrap';

let ModalPrice = (props) => {

    const {toggle} = props

    const {setEnergy, setPrice, energyBids, setEnergyBids, priceBids, setPriceBids} = useContext(MainContext);

    const [tempEnergy, setTempEnergy] = useState(JSON.parse(JSON.stringify(energyBids)))
    const [tempPrice, setTempPrice] = useState(JSON.parse(JSON.stringify(priceBids)))

    const closeBtn = (
        <button className="close" onClick={()=>{
            toggle()
        }} type="button">
          &times;
        </button>
      );

        return (
            
            <MyModal isOpen={true} toggle={toggle} centered={true} backdrop={true} 
            >

                <ModalHeader toggle={toggle} close={closeBtn}>
                    Modal Confirm
                </ModalHeader>

                <MainModalBodyDiv>
                    <>
                    <div className='col-1'>
                    <div className='row my-1'>Energy</div>
                    <div className='row'>Price</div>
                </div>    

                <div className='col-auto'>
                    <div className='row flex-row justify-content-around my-1'>
                        {tempEnergy.map((val,idx) => (
                        <NumberInput
                        bordercolor={'#a4a4a4f'}
                        type='number'
                        value={val}
                        // style={{border:'2px solid grey', width:'40px', marginLeft:'5px', marginRight:'5px', borderRadius:'15%'}}
                        onChange={(e) => {
                            const newValue = parseFloat(e.target.value)
                            setTempEnergy((prev) => {
                                const temp = [...prev]
                                temp[idx] = !isNaN(newValue) ? newValue : 0
                                return temp
                            })
                        }}  
                        />
                        ))}
                    </div>
                    <div className='row flex-row row flex-row justify-content-around'>
                        {tempPrice.map((val,idx) => (
                        <NumberInput
                        bordercolor={'#a4a4a4f'}
                        type='number'
                        value={val}
                        // style={{border:'2px solid grey', width:'40px', marginLeft:'5px', marginRight:'5px', borderRadius:'15%'}}
                        onChange={(e) => {
                            const newValue = parseFloat(e.target.value)
                            setTempPrice((prev) => {
                                const temp = [...prev]
                                temp[idx] = !isNaN(newValue) ? newValue : 0
                                return temp
                            })
                        }}
                        />
                        ))}
                    </div>
                </div>    

                <div className='col-1'>
                    <div className='row my-1'>
                        <CommonAcceptBtn>+</CommonAcceptBtn>
                    </div>
                    <div className='row'>
                        <CommonAcceptBtn>-</CommonAcceptBtn>
                    </div>
                </div>
                    </>
                
                </MainModalBodyDiv>

                <ModalFooter>
                    <AddButton color="success" onClick={() => toggle()}>
                        Cancel
                    </AddButton>
                    <AddButton color="warning" onClick={() => {
                        let stackedEnergy = {}
                        // create object key-price, value-energy
                        tempPrice.forEach((p, idx) => {
                            if (Object.prototype.hasOwnProperty.call(stackedEnergy, p)){
                                stackedEnergy[p]+=tempEnergy[idx]
                            }else{
                                stackedEnergy[p]=tempEnergy[idx]
                            }   
                        })
                        
                        //trensfer object into array and sort
                        let energyPriceList = Object.entries(stackedEnergy).sort((a, b) => a[0] - b[0])

                        //save energy bids - not cumulative which one go to plot
                        setEnergyBids([...energyPriceList.map((item) => item[1])])
                        setPriceBids([...energyPriceList.map((item) => item[0])])

                        //add first point
                        energyPriceList.unshift([Math.min(...tempPrice),0])

                        //prefix sum to calculate cummulatice demand
                        for (let i = 1; i < energyPriceList.length; i++) {
                            energyPriceList[i][1] += energyPriceList[i - 1][1];
                        }
                        
                        //set price for plot
                        setEnergy([...energyPriceList.map((item) => item[1])])
                        setPrice([...energyPriceList.map((item) => parseFloat(item[0]))])
                        toggle()
                    }}>
                        Confirm
                    </AddButton>
                </ModalFooter>
                

               
            </MyModal>
        )
}



export default ModalPrice