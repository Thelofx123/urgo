import React, { useContext, useState, useEffect, createContext } from "react";


const dtCon = createContext()

export const TestProvider = ({children}) => {
   
  const [dt, usedt] =useState("")

    return (
        <dtCon.Provider value={{dt, usedt}}>
         {children}   
        </dtCon.Provider>
    )
}

export const useDtCon = () => useContext(dtCon)