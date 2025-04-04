import React, {useState, useContext} from 'react';
import { CommonAcceptBtn} from '../CommmonStyles';

import { MainContext } from './MainContext';

import { 
    MyInput, 
    MyModalBody,
    RemoveButton, 
    MyModal, 
    AddButton,
    BottomButtonDiv,
    MainModalBodyDiv,
    OneColumnDiv,
    MySpan,
    TitleSpan, } from '../Styles/ModalStyles';

import{
    ModalHeader,
    ModalFooter   
} from 'reactstrap';

let ModalPrice = (props) => {

    const {toggle} = props

    const {energy, price, setEnergy, setPrice} = useContext(MainContext);

    const [tempEnergy, setTempEnergy] = useState(JSON.parse(JSON.stringify(energy)))
    const [tempPrice, setTempPrice] = useState(JSON.parse(JSON.stringify(price)))

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
                        <input
                        type='number'
                        value={val}
                        style={{border:'2px solid grey', width:'40px', marginLeft:'5px', marginRight:'5px', borderRadius:'15%'}}
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
                        <input
                        type='number'
                        value={val}
                        style={{border:'2px solid grey', width:'40px', marginLeft:'5px', marginRight:'5px', borderRadius:'15%'}}
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
                        setEnergy([...tempEnergy])
                        setPrice([...tempPrice])
                        toggle()
                    }}>
                        Confirm
                    </AddButton>
                </ModalFooter>
                

               
            </MyModal>
        )
}



export default ModalPrice