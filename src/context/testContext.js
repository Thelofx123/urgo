import React, { useContext, useState, useEffect, createContext } from "react";


const testCon = createContext()

export const TProvider = ({children}) => {
   
  const [isId, setIsId] =useState(false)

    return (
        <testCon.Provider value={{isId, setIsId}}>
         {children}   
        </testCon.Provider>
    )
}

export const useTestCon = () => useContext(testCon)