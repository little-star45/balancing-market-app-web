import React, {useState, useContext} from 'react';
import { CommonAcceptBtn, CommonIconButton} from '../CommmonStyles';

import { MainContext } from './MainContext';

import PlusIcon from '../assets/icons/reshot-icon-plus.svg'
import MinusIcon from '../assets/icons/reshot-icon-minus.svg'

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
import { notify_success } from './BasicToasts';

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
            
            <MyModal isOpen={true} toggle={toggle} centered={true} backdrop={true}>

                <ModalHeader toggle={toggle} close={closeBtn}>
                    Add/Delete energy prices bids
                </ModalHeader>

                <MainModalBodyDiv>
                    <>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-3 '><b>Energy</b> [GWh]</div>
                            <div className='col-8 justify-content-around'>
                                <div className='row'>
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
                            </div>
                            <div className='col-1'>
                                <CommonIconButton 
                                    buttoncolor='#8dd372' 
                                    onClick={()=>{
                                        if (tempEnergy.length<11){
                                            setTempEnergy((prev) => {
                                            const temp = [...prev]
                                            temp.push([0,0])
                                            return temp
                                            })
                                            setTempPrice((prev) => {
                                                const temp = [...prev]
                                                temp.push([0,0])
                                                return temp
                                            }) 
                                        }
                                        
                                    }}>
                                        <img src={PlusIcon} width="24" height="24" style={{filter: 'invert(0.2)'}}/>
                                </CommonIconButton>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-3'><b>Price</b> [EUR/GWh]</div>
                            <div className='col-8 justify-content-around'>
                                <div className='row'>
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
                                <CommonIconButton 
                                    buttoncolor='#e98989'
                                    onClick={()=>{
                                        if (0<tempEnergy.length){
                                            setTempEnergy((prev) => {
                                            const temp = [...prev]
                                            temp.pop()
                                            return temp
                                            })
                                            setTempPrice((prev) => {
                                                const temp = [...prev]
                                                temp.pop()
                                                return temp
                                            }) 
                                        }
                                        
                                    }}>
                                        <img src={MinusIcon} width="24" height="24" style={{filter: 'invert(0.2)'}}/>
                                </CommonIconButton>
                            </div>
                        </div>

                    </div> 

                    </>
                
                </MainModalBodyDiv>

                <ModalFooter>
                    <AddButton color="success" onClick={() => toggle()}>
                        Cancel
                    </AddButton>
                    <AddButton color="success" onClick={() => {
                        setTempEnergy([5, 5, 5, 5, 5, 5])
                        setTempPrice([2, 10, 17, 27, 32, 37])
                        setEnergyBids([5, 5, 5, 5, 5, 5])
                        setPriceBids([2, 10, 17, 27, 32, 37])
                        setEnergy([0, 5, 10, 15, 20, 25, 30])
                        setPrice([2, 2, 10, 17, 27, 32, 37])
                    }}>
                        Set Default
                    </AddButton>
                    <AddButton color="success" onClick={() => {
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
                        notify_success('Bids saved!')
                    }}>
                        Confirm
                    </AddButton>
                </ModalFooter>
                

               
            </MyModal>
        )
}

export default ModalPrice