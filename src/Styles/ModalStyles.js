import styled from 'styled-components'

import{
    Modal, 
    ModalBody,
    Input,
    
} from 'reactstrap';

export const MyModal = styled(Modal)`
    max-width: 900px;
`;

export const MyModalBody = styled(ModalBody)`
    display: flex;
    flex-direction: column;
`;

export const MainModalBodyDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    /* padding-left:2vw; */
    padding-right:2vw;
`
export const NumberInput = styled(Input)`
    border: 2px solid ${props=>props.bordercolor};
    border-radius: 5px;
    width:50px;
    &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

    -moz-appearance: textfield;

    &:hover{
        border-color: ${props=>props.bordercolor};
    }
    &:active{
        border-color: ${props=>props.bordercolor};
    }
`

export const RemoveButton = styled.button`
    flex:1;
    margin:0px;
    margin-bottom: 10px;
    margin-left: 3vw;
    margin-right: 10px;
    padding: 0.25em 1em;
    border: 2px solid darkgray;
    border-radius: 10px;
    display: block;
    background-color: darkgray;
    color: white;

  &:hover {
  font-size: 1em;
  border: 2px solid black;
  border-radius: 10px;
  display: block;
  background-color: black;
  color: white;
  }`

export const AddButton = styled(RemoveButton)`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid grey;
    background-color: grey; 
  
  &:hover {
  margin: 1em;
  padding: 0.25em 1em;
  }`