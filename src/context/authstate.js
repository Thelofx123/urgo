import React, { useContext, useState, useEffect, createContext } from "react";


const authState = createContext()

export const authProvider = ({children}) => {

    let uid;
    const [user, setUser] =useState("")

    

    const currentUser = auth.currentUser;
      const autoSignin = () =>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
               uid = user.uid;       
              console.log("My nigga cumback")
        
            } else {
              console.log("I will be back")
            }
      })
    }



    return (
        <authState.Provider value={{dt, usedt}}>
         {children}   
        </authState.Provider>
    )
}

export const useauthState = () => useContext(authState)