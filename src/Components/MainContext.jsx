import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const [pBn, setPbN] = useState(10);
    const [pSn, setPsN] = useState(15);
    const [LS, setLs] = useState(15);
    const [LB, setLb] = useState(25);
    const [energy, setEnergy] = useState([0, 5, 10, 15, 20, 25, 30]);
    const [price, setPrice] = useState([2, 2, 10, 17, 27, 32, 37]);
    const [energyBids, setEnergyBids] = useState([5, 5, 5, 5, 5, 5]);
    const [priceBids, setPriceBids] = useState([2, 10, 17, 27, 32, 37]);


    return (
        <MainContext.Provider value={{ 
            pBn, setPbN, 
            pSn, setPsN, 
            LS, setLs, 
            LB, setLb, 
            energy, price,
            setEnergy, setPrice,
            energyBids, setEnergyBids,
            priceBids, setPriceBids
             }}>
                
            {children}
        </MainContext.Provider>
    );
};