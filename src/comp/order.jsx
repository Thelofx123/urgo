import React, { useState } from "react";

import "../App.css"
import { useDtCon } from "../context/dataContext";
import { Navigate } from 'react-router-dom';
import { useObjCon } from "../context/objContext";
import {Link} from "react-router-dom";
import {UseauthState1} from "../context/authstate"

 const Order = () =>{

    const {dt, usedt} = useDtCon()
    const {dt1, usedt1} = useObjCon()
    const [active,useactive] = useState(false)
    const [cl,usecl] = useState([])
    const {user, setUser} = UseauthState1()

    let count=0
    const onchange = (e) =>{
        e.preventDefault();
        usecl({...cl,[e.target.name]:e.target.value,["title"]:dt.name || dt.title , ["poster"]:dt.poster_path,["id"]:dt.id ,["backdrop"]:dt.backdrop_path })
    }
    if(active){
        return <Navigate   to="/payment" />
    }
    
    return(
        <div  className="order">
        {   
            user ?  
            dt ? (<div  className="order">
            <img className="mainZurag" src={`https://image.tmdb.org/t/p/original${dt.poster_path}`}></img>
            <div className="half1">
            <h1>Booking section</h1>
            <label>Adult</label>
            <input type="number" name="Anumber" max="30" min="0" onChange={onchange}></input>
            <label>Kid</label>
            <input type="number" name="knumber"  max="30" min="0" onChange={onchange}></input>
            <label>Pick a time*</label>
            <div>
            <input type="radio" name="tsag"  value='11:30' onChange={onchange}></input>
             <label for="vehicle1"> 11:30</label><br></br>
            </div>
            <div>
            <input type="radio" name="tsag"  value='12:30' onChange={onchange}></input>
             <label for="vehicle1"> 12:30</label><br></br>
            </div>
            <div>
            <input type="radio" name="tsag"  value='13:30' onChange={onchange}></input>
             <label for="vehicle1"> 13:30</label><br></br>
            </div>
            <div> 
           
            <button onClick={() => 
                {
                        
                        if(cl.Anumber || cl.knumber ){
                            usedt1(cl)
                            useactive(true)
                        }
                        else{
                                alert("Hello channel welcome to my guys")
                        }
                  
                }}>Continue</button>
       
        
  <Link to="/about">
  <button>Back</button>
  </Link>
              
            </div>
      </div>
  </div>)
  : (<div>No order for now</div>)
  : (<div>Please Login
    <Link to="/login"> <button>Login</button></Link>
  
  </div>)
        }
      </div>
    )
}
export default Order