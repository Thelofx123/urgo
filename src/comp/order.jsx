import React, { useState } from "react";
import { useContext } from "react";
import "../App.css"
import { useDtCon } from "../context/dataContext";
import { Navigate } from 'react-router-dom';
import { useObjCon } from "../context/objContext";

 const Order = () =>{

    const {dt, usedt} = useDtCon()
    console.log(dt)
    const {dt1, usedt1} = useObjCon()
    const [active,useactive] = useState(false)
    const [cl,usecl] = useState([])
    const [date,usedate] = useState("first")
   


    const onchange = (e) =>{
        usecl({...cl,[e.target.name]:e.target.value,["title"]:dt.title , ["poster"]:dt.poster_path })
        console.log(e.target.data)
        console.log(cl) 
    }
  
    if(active){
        return <Navigate   to="/payment" />
  }

    return(
      <div className="order">
            
                <img className="mainZurag" src={`https://image.tmdb.org/t/p/original${dt.poster_path}`}></img>
          <div className="half1">
                <h1>Booking section</h1>
                <label>Name</label>
                <input type="text" name="name" onChange={onchange} placeholder="Name..."></input>
                <label>Phone</label>
                <input type="number" name="number" onChange={onchange}></input>
                <label>email</label>
                <input type="mail" name="mail" onChange={onchange}></input>
                <label>Adult</label>
                <input type="text" name="Anumber" onChange={onchange}></input>
                <label>Kid</label>
                <input type="text" name="knumber" onChange={onchange}></input>
                <label>Pick a time*</label>
                <div>
                <input type="checkbox" name="tsag" id="vehicle1" value='11:30' onChange={onchange}></input>
                 <label for="vehicle1"> 11:30</label><br></br>
                </div>
                <div>
                <input type="checkbox" name="tsag" id="vehicle1" value='12:30' onChange={onchange}></input>
                 <label for="vehicle1"> 12:30</label><br></br>
                </div>
                <div>
                <input type="checkbox" name="tsag" id="vehicle1" value='13:30' onChange={onchange}></input>
                 <label for="vehicle1"> 13:30</label><br></br>
                </div>
                <div> 
                    <button onClick={() => {
            usedt1(cl)
            useactive(true)
         }}>Continue</button>
                    <button>Back</button>
                </div>
          </div>
      </div>
    )
}
export default Order