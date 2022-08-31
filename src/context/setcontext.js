import React, { useContext, useState, useEffect, createContext } from "react";


const DtCon = createContext()

export const TestProvider = ({children}) => {
   
  const [dt, usedt] =useState({})
  const [ dt2,useDt2] = useState({})
    return (
        <DtCon.Provider value={{dt, usedt,dt2,useDt2}}>
         {children}   
        </DtCon.Provider>
    )
}

export const DtCon1 = () => useContext(DtCon)