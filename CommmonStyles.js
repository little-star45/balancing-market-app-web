import styled from 'styled-components'

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
    /* -webkit-appearance: none;
    appearance: none; */

    /* width: 100%; */
    /* height: 10px; */
    

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 23px;
        height: 24px;
        border: 0;
        background-color:rgb(207, 25, 210);
        border: 2px solid rgb(17, 25, 33);
        cursor: pointer;
    }
    &::-webkit-slider-runnable-track{
        width: 20px;
        /* height: 20px; */
        border-radius: 10px;
        background-color:rgb(64, 146, 227);
        border: 4px solid rgb(16, 72, 128);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    }
    /* &::-moz-range-thumb{
        height: 20px;
        border-radius: 10px 0 0 10px;
        background-color: #2196F3;
        border: 2px solid #1976D2;
    } */
`