import React, { useState ,useEffect} from "react";
import "../App.css"
import { useTestCon } from "../context/testContext";



 const Transaction = () =>{
    const seats = document.getElementsByClassName("seat")
    let seat = new Array(30).fill();
    const [index,useindex] = useState([])
    const [isclicked,setisclicked] = useState([])
    const {isId, setIsId} = useTestCon()

    
   
    return(
        <div className="fullTicket">
            <div className="ticket">
                <div className="subNavbar">
                    <h2>{isId.name || isId.title}</h2>
                </div>
                <div className="imageClass">
                <img className="ticketBackground" src={`https://image.tmdb.org/t/p/original${isId.backdrop}`}></img>
                </div>
            </div>

            <div className="secondTicket">
                <h1>Name:{isclicked.name}</h1>
                <h1>Name:{isclicked}</h1>

            </div>
        </div>
    )
      
    
}
export default Transaction