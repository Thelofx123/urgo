import React, { useContext, useState, useEffect, createContext } from "react";
import { useGetDocsFromFireBase } from "../firebase";

const DtCon = createContext()

export const TestProvider = ({children}) => {
   
  const [dt, usedt] =useState({})
  const [data] = useGetDocsFromFireBase()
    return (
        <DtCon.Provider value={{dt, usedt,data}}>
         {children}   
        </DtCon.Provider>
    )
}

export const DtCon1 = () => useContext(DtCon)