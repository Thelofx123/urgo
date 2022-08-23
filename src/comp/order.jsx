import React, { useState } from "react";

import "../App.css"
import { useDtCon } from "../context/dataContext";
import { Navigate } from 'react-router-dom';
import { useObjCon } from "../context/objContext";
import {Link} from "react-router-dom";


 const Order = () =>{

    const {dt, usedt} = useDtCon()
    const {dt1, usedt1} = useObjCon()
    const [active,useactive] = useState(false)
    const [cl,usecl] = useState([])


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
            dt ?  <div  className="order">
            
            <img className="mainZurag" src={`https://image.tmdb.org/t/p/original${dt.poster_path}`}></img>
            <div className="half1">
            <h1>Booking section</h1>
            <label>Name</label>
            <input type="text" name="name" onChange={onchange} placeholder="Name..."></input>
            <label>Phone</label>
            <input type="text" name="number"  pattern="\d*" maxlength="8" onChange={onchange}></input>
            <label>email</label>
            <input type="mail" name="mail" onChange={onchange}></input>
            <label>Adult</label>
            <input type="number" name="Anumber" max="15"  onChange={onchange}></input>
            <label>Kid</label>
            <input type="number" name="knumber"  max="15" onChange={onchange}></input>
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
           
            <button onClick={() => 
                {
                        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if(cl.mail.match(mailformat)){
                            usedt1(cl)
                            useactive(true)
                        }
                        else{
                                alert("Wrong email")
                        }
                  
                }}>Continue</button>
       
        
  <Link to="/about">
  <button>Back</button>
  </Link>
              
            </div>
      </div>
  </div>
  : (<div>No order</div>)
 
        }
      </div>
    )
}
export default Order