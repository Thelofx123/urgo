import React, { useContext, useState, useEffect, createContext } from "react";


const objCon = createContext()

export const ObjProvider = ({children}) => {
   
  const [dt1, usedt1] =useState("")

    return (
        <objCon.Provider value={{dt1, usedt1}}>
         {children}   
        </objCon.Provider>
    )
}

export const useObjCon = () => useContext(objCon)