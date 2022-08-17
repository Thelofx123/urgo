import React, { useState } from "react";
import { useContext } from "react";
import "../App.css"
import { Navigate } from 'react-router-dom';
import { useDtCon } from "../context/dataContext";
import { useObjCon } from "../context/objContext";
import { useTestCon } from "../context/testContext";
 const Payment = () =>{
    const seats = document.getElementsByClassName("seat")
    let seat = new Array(30).fill();
    const {dt1, usedt1} = useObjCon()
    let a = 10000;
    let h = 8000;
    const [index,useindex] = useState("")
    const [isclicked,setisclicked] = useState([])
    const {isId, setIsId} = useTestCon()

    const onchange = (e) =>{

            let ids= e.target.getAttribute("id")
            console.log(isclicked)
            setisclicked(prev => 
                    [...prev, {id:ids} ])
    }


    // const onclick2 = () =>{
    //     console.log(isclicked)
    // }



    const onclick1 = () =>{ 
        return <Navigate  to="/order" />
    }
    return(
        <div className="full">
            <div className="top">
                <div className="row" > 
                {seat.map((e,l) =>{
                return(<input className="seat"  onChange={onchange} id={l} type="checkbox" disabled={isclicked.id != l ? false : true}></input>)
            })}
            <button >dar</button>
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