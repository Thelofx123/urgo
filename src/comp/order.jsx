import React, { useState ,useEffect} from "react";
import { useContext } from "react";
import "../App.css"
import { useDtCon } from "../context/dataContext";
import { Navigate } from 'react-router-dom';
import { useObjCon } from "../context/objContext";
import { collection , onSnapshot,addDoc ,getDoc,getDocs,doc, setDoc} from 'firebase/firestore';
import {db} from "../firebase"
import {Link, Routes ,Route} from "react-router-dom";


 const Order = () =>{

    const {dt, usedt} = useDtCon()
    const {dt1, usedt1} = useObjCon()
    const [active,useactive] = useState(false)
    const [cl,usecl] = useState([])
    const [date,usedate] = useState("first")
    const [index1,useindex1] = useState([])
    let count=0

    const onchange = (e) =>{
        usecl({...cl,[e.target.name]:e.target.value,["title"]:dt.name || dt.title , ["poster"]:dt.poster_path,["id"]:dt.id ,["backdrop"]:dt.backdrop_path  })
    }
    if(active){
        return <Navigate   to="/payment" />
    }
    console.log(cl)
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
                <input type="number" name="Anumber" defaultValue={0} onChange={onchange}></input>
                <label>Kid</label>
                <input type="number" name="knumber" defaultValue={0}  onChange={onchange}></input>
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
                        usedt1(cl)
                        useactive(true)
                    }}>Continue</button>
           
            
      <Link to="/about">
      <button>Back</button>
      </Link>
                  
                </div>
          </div>
      </div>
    )
}
export default Order