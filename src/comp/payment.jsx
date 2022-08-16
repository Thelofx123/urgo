import React, { useState } from "react";
import { useContext } from "react";
import "../App.css"
import { Navigate } from 'react-router-dom';
import { useDtCon } from "../context/dataContext";
import { useObjCon } from "../context/objContext";

 const Payment = () =>{
    const seats = document.getElementsByClassName("seat")
    let seat = new Array(30).fill(<input className="seat" type="checkbox"></input>);
    const {dt1, usedt1} = useObjCon()
    let a = 10000;
    let h = 8000;
    console.log(dt1)
    const [index,useindex] = useState("")

    const onchange = () =>{
       
     
     }


    const onclick1 = () =>{
        return <Navigate   to="/order" />
    }
    return(
        <div className="full">
            <div className="top">
                <div className="row" onClick={onchange}> 
                {seat.map((e,l) =>{
                return(e)
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
                <h4>{parseInt(dt1.Anumber) + parseInt(dt1.knumber)}</h4>
                <h2>Seat:</h2>
                <h4 >none</h4>
                <h2>Total price:</h2>
                <h4>{parseInt(dt1.Anumber)*a + parseInt(dt1.knumber)*h}</h4>
            </div>
            
      </div>
      <div className="bottom"> 
                <button onClick={onclick}>Continue</button>
                <button onclick={onclick1}>Back</button>
            </div>
        </div>
    
      
    )
}
export default Payment