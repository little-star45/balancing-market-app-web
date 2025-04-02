import styled from 'styled-components'
import solarIcon from './assets/icons/reshot_icon_solar_power.svg'
import solarIconWhite from './assets/icons/reshot_icon_solar_power_white.svg'

export const Context = styled.main`

  background-color: white;//#D2D2D6;//#6d6d73;
  padding-top: 0.5rem;
  /* padding-bottom: 1rem; */
  /* margin-bottom:0; */
  padding-left: 12rem;
  padding-right: 12rem;
  /* position: relative; */
  /* padding: 3px;
  margin-bottom: 2px; */

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
    /* padding-bottom:  625px; */
    
`
export const Container2 = styled.div`


/* align-content:  center;
justify-content: center; */
    margin-top: 20px;
    /* display:flex;
    flex-direction: column; */

/* padding: 0px; */
/* padding-bottom:  425px; */

`

export const CustomTitle = styled.div`

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
        margin-top: -14px; /* set margin to center thumb (height_thumb-2xheight)/2 */
        border: 5px solid ${props=>props.sliderColor+'60'};
        border-image-source: none;
        border-image-slice: 1;
    }
    &::-webkit-slider-thumb:hover {
        border-color: ${props=>props.sliderColor};
        background-color:rgb(255, 255, 255);
        box-shadow: 0 0 0 5px ${props=>props.sliderColor+'50'};
        }

    &:active::-webkit-slider-thumb {
        background-image: url("${solarIconWhite}");
        background-color:${props=>props.sliderColor};
        box-shadow: 0 0 0 10px ${props=>props.sliderColor+'50'};
        }
    
    &::-webkit-slider-runnable-track{
        height: 6px;
        background-color:${props=>props.sliderColor};
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
        background-color:${props=>props.sliderColor};
        box-shadow: 0 0 0 15px rgba(255, 85, 0, .1);
    }

    &::-moz-range-track {
        height: 6px;
        background-color:${props=>props.sliderColor};
        border-radius: 16px;
    }
`;

export const SliderTick = styled.rect`
    /* display: flex;
    justify-content: center;
    width: 2px;
    height: 10px; */
    background-color: #d3d3d3;
    /* line-height: 50px; */
    color:rgb(91, 87, 87);
    outline: 0;
    -webkit-transform: translateX(2px);
    -moz-transform: translateX(2px);
    -ms-transform: translateX(2px);
    -o-transform: translateX(2px);
    transform: translateX(2px);
`