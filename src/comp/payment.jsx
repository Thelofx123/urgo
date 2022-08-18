import React, { useState } from "react";
import { useContext } from "react";
import "../App.css"
import { Navigate } from 'react-router-dom';
import { useDtCon } from "../context/dataContext";
import { useObjCon } from "../context/objContext";
import { useTestCon } from "../context/testContext";
import { doc, setDoc } from "firebase/firestore"; 
import { collection , onSnapshot,addDoc } from 'firebase/firestore';
import {db} from "../firebase"

 const Payment = () =>{
    const seats = document.getElementsByClassName("seat")
    let seat = new Array(30).fill();
    const {dt1, usedt1} = useObjCon()
    let a = 10000;
    let h = 8000;
    const [index,useindex] = useState({})
    const [isclicked,setisclicked] = useState([])
    const {isId, setIsId} = useTestCon()
    let count = parseInt(dt1.Anumber) + parseInt(dt1.knumber)
    const cityRef = collection(db, 'movies', dt1.title,dt1.tsag);

    const onchange = (e) =>{
        
            let ids= e.target.getAttribute("id")
            console.log(ids)
            console.log(e.target.checked)
            if(!isclicked.includes(ids)){
                setisclicked(prev => 
                    [...prev, ids])
                }
            else{
                setisclicked(
                  isclicked.filter(item => item !== ids)
                  )
            }
            }
    

    const onclick = () =>{
     
        addDoc(cityRef, {id:isclicked} , { merge: true });
    }
let arr= [1,2,3]

    const backto = () =>{ 
        return <Navigate   to="/orders" />
    }
    return(
        <div className="full">
            <div className="top">
                <div className="row" > 
                {seat.map((e,l) =>{
                return(<input className="seat"  onChange={onchange} id={l} type="checkbox" disabled={  arr.includes(l) ? true : false}></input>)
            })}

 
                </div>
            </div>
           
        <div className="order">
            
            <img className="mainZurag" src={`https://image.tmdb.org/t/p/original${dt1.poster}`}></img>
            <div>
                <h2>Name: </h2>
                <h4>{dt1.name}</h4>
                <h2>Movie name: </h2>
                <h4>{dt1.title}</h4>
                <h2>On :</h2>
                <h4>{dt1.tsag}</h4>
                <h2>Ticket </h2>
                <h4>{count}</h4>
                <h2>Seat:</h2>
                <h4 >{isclicked }</h4>
                <h2>Total price:</h2>
                <h4>{parseInt(dt1.Anumber)*a + parseInt(dt1.knumber)*h}</h4>
            </div>
            
      </div>
      <div className="bottom"> 
                <button onClick={onclick}>Continue</button>
                <button onClick={backto}>Back</button>
            </div>
        </div>
      
    )
}
export default Payment