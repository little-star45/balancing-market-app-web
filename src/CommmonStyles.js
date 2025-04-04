import styled, {createGlobalStyle} from 'styled-components'
import solarIcon from './assets/icons/reshot_icon_solar_power.svg'
import solarIconWhite from './assets/icons/reshot_icon_solar_power_white.svg'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Boldonse&display=swap'); //title
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap'); //text

`;

export const Main = styled.main`
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  /* font-weight: 500; */
  background-color: white;//#D2D2D6;//#6d6d73;
  padding-top: 0.5rem;
  padding-left: 12rem;
  padding-right: 12rem;

  @media (max-width: 1300px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 550px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Container = styled.div`

    align-content:  center;
    margin-top: 0px;
    
`
export const Container2 = styled.div`
    margin-top: 0px;

`

export const CustomTitle = styled.div`
    font-family: "Boldonse", system-ui;
    font-size: 36px;
    font-weight: bold;

`

export const Slider = styled.input`
        -webkit-appearance: none;
        appearance: none; 
        width: 100%;
        cursor: pointer;
        outline: none;
        border-radius: 15px;
        /* height: 20px; */
        height: 6px;
        background: #ccc;
        z-index: 5;

    &::-webkit-slider-thumb { //circle
        -webkit-appearance: none;
        appearance: none; 
        background-color: #fff;
        background-image: url("${solarIcon}");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        border-image-slice: 1;
        transition: .3s ease-in-out;
        margin-top: -12.5px; /* set margin to center thumb (height_thumb-2xheight)/2 */
        border: 5px solid ${props=>props.slidercolor+'60'};
        border-image-source: none;
        border-image-slice: 1;
    }
    &::-webkit-slider-thumb:hover {
        border-color: ${props=>props.slidercolor};
        background-color:rgb(255, 255, 255);
        box-shadow: 0 0 0 5px ${props=>props.slidercolor+'50'};
        }

    &:active::-webkit-slider-thumb {
        background-image: url("${solarIconWhite}");
        background-color:${props=>props.slidercolor};
        box-shadow: 0 0 0 10px ${props=>props.slidercolor+'50'};
        }
    
    &::-webkit-slider-runnable-track{
        height: 10px;
        background-color:${props=>props.slidercolor};
        border-radius: 16px;
    }
    /* for Mozilla */
    &::-moz-range-thumb {
        -moz-appearance: none;
        appearance: none; 
        background-color: #fff;
        background-image: url("${solarIcon}");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        transition: .3s ease-in-out;
        margin-top: -17px;
    }

    &::-moz-range-thumb:hover {
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 0 5px rgba(255, 85, 0, .1);
    }

    &:active::-moz-range-thumb {
        background-color:${props=>props.slidercolor};
        box-shadow: 0 0 0 15px rgba(255, 85, 0, .1);
    }

    &::-moz-range-track {
        height: 6px;
        background-color:${props=>props.slidercolor};
        border-radius: 16px;
    }
`;

export const SliderTick = styled.rect`
    background-color: #d3d3d3;
    color:rgb(91, 87, 87);
    outline: 0;
`

export const DemandInput = styled.input`
    border: 2px solid ${props=>props.bordercolor+'90'};
    border-radius: 5px;
    width:50px;
    /* &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

    -moz-appearance: textfield; */

    &:hover{
        border-color: ${props=>props.bordercolor};
    }
    &:active{
        border-color: ${props=>props.bordercolor};
    }
`
export const PriceTag  = styled.span`
    background-color: ${props=>props.maincolor+'60'};
    margin-left:5px;
    margin-right:15px;
    padding: 3px 5px;
    border-radius: 5px;
    /* font-weight: 500; */

    &:hover{
        background-color: ${props=>props.maincolor+'70'};
        box-shadow: 0 0 0 5px ${props=>props.maincolor+'20'};
        transition: .3s ease-in-out;
    }
`

export const Card = styled.div`

  padding: 0.5rem;
  /* box-shadow: 2px 2px 2px 2px #d8d7d5; */
  width: 100%;
  /* max-height: 800px; */
  /* overflow-y: auto; */
  /* position: relative; */
  margin-bottom: 1vh;
  /* background-color: #f7f8fc; */
  /* transition: all 0.3s ease; */
  border: 1px solid;
  border-radius: 0.375rem;
  border-color: #d1d5db;
/* 
  &:hover{
    transform: scale(1.01);
  } */

`

export const CommonAcceptBtn = styled.button`
  /* display: inline-block; */

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid rgb(216, 228, 238);;
  border-radius: 10px;
  display: block;
  background-color:rgb(216, 228, 238);
  color: black;
  
  &:focus {
    outline: 0;
  }
  
  &:hover {
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid rgb(108, 117, 125);
  border-radius: 10px;
  display: block;
  background-color: rgb(108, 117, 125);
  color: white;
  }

  &:disabled {
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid black;;
  border-radius: 10px;
  display: block;
  background-color:white;
  color: black;
    cursor: not-allowed;
  }


`

export const CommonEditBtn = styled(CommonAcceptBtn)`
  
  /* display: inline-block; */

  /* font-size: 1em; */
  margin: 0.25em;
  /* padding: 0.25em 1em; */
  /* border: 2px solid #5e616e; */
  border-radius: 7px;
  /* display: block; */
  /* background-color: #5e616e; */
  /* color: white; */
  
  

  &:hover {
    /* font-size: 1em; */
  margin: 0.25em;
  /* padding: 0.25em 1em; */
  /* border: 2px solid black; */
  border-radius: 7px;
  /* display: block; */
  /* background-color: black;
  color: white; */
  }

`

export const CommonDeclineBtn = styled(CommonAcceptBtn)`
  
  /* display: inline-block; */

  /* font-size: 1em;
  /* margin: 0.25em; */
  padding: 0.25em 0.5em; 
  /* border: 2px solid #DB6653; */

  border: 2px solid black;
  /* border-radius: 7px;
  display: block; */

  /* background-color: #DB6653; */
  background-color: black;
  /* color: white; */
  
  
  &:hover {
    /* font-size: 1em;
  /* margin: 0.25em; */
  padding: 0.25em 0.5em;
  border: 2px solid #D2D2D6;
  /* border: 2px solid #D4503D; */
  /* border-radius: 7px; */
  /* display: block;  */
  background-color: #D2D2D6;

  /* background-color: #D4503D; */
  /* color: white; */
  }

`