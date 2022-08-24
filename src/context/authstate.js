import React, { useContext, useState, useEffect, createContext } from "react";


const authState1 = createContext()

export const AuthProvider = ({children}) => {


    const [user, setUser] =useState(false)

    return (
        <authState1.Provider value={{user, setUser}}>
         {children}   
        </authState1.Provider>
    )
}

export const UseauthState1 = () => useContext(authState1)