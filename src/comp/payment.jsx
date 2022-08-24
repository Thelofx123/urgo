import React, { useState ,useEffect} from "react";

import "../App.css"
import { Navigate } from 'react-router-dom';
import { useObjCon } from "../context/objContext";
import { useTestCon } from "../context/testContext";
import {getDoc,doc, setDoc} from 'firebase/firestore';
import {db} from "../firebase"
import {Link} from "react-router-dom";



 const Payment = () =>{
    let seat = new Array(30).fill();
    const {dt1, usedt1} = useObjCon()
    let a = 10000;
    let h = 8000;
    const [index,useindex] = useState([])
    const [isclicked,setisclicked] = useState([])
    const {isId, setIsId} = useTestCon()
    const [isseat1,useisseat1] = useState([])
    const [movie,setMovie] = useState({})
    let phone = window.localStorage.getItem('phone')
    let anumber =  isNaN(dt1.Anumber) ? 0 : parseInt(dt1.Anumber)
    let Knumber = isNaN(dt1.knumber) ? 0 : parseInt(dt1.knumber)
    let total = anumber + Knumber

    console.log(phone)
 
 
    const auto = async () =>{
        const getData=  await getDoc(doc(db,`seats/${dt1.id}`))
       .then ((item) =>{
       
            useindex( item.data().id)   
      }) 
      .catch((err) =>
      console.log(err)
      )
      const getData1=  await getDoc(doc(db,`users/${phone}`))
       .then ((item) =>{
       
            setMovie( item.data().movie)   
      }) 
  }

  useEffect(() => {
    auto();   
     },[])
     
    const onchange = (e) =>{
        
            let ids=   parseInt(e.target.getAttribute("id"))
                       if(!isclicked.includes(ids)){
                        setisclicked( prev=>
                         [...prev,...index,ids])
                            useisseat1( prev => [...prev,ids])
                        }
                       
                    
                        else{
                            setisclicked(
                            isclicked.filter(item => item !== ids)
                            )
                            useisseat1(
                                isseat1.filter(item1 => item1 !== ids)
                                )
                        }
                          
                        setMovie({...movie,title:dt1.title,time:dt1.tsag,seat:isseat1}) 
            }
        
    const onclick = async () =>{
        let moviename = dt1.title
        const cityRef = doc(db, `users/${phone}`);
        const seatRef = doc(db, `seats/${dt1.id}`);
        setIsId({...isId,["title"]:dt1.title , ["phone"]:dt1.number ,["poster"]:dt1.poster,["id"]:dt1.id,["name"]:dt1.name,["time"]:dt1.tsag,["seat"]:isseat1,["backdrop"]:dt1.backdrop ,["total"]:anumber * a + Knumber * h})
     setDoc(cityRef,  { movie});
    setDoc(seatRef,{id:isclicked},{merge:true});
 
    }
    const backto = () =>{ 
        return <Navigate   to="/orders" />
    }
    return(
        <div  className="full" >
            <div className="top">
                <div className="row" > 
                {seat.map((e,l) =>{
                return(<input className="seat"  onChange={onchange}   id={l} type="checkbox" disabled={ 
                    (index.includes(l) || (isseat1.length==total && !isseat1.includes(l))) ? true : false
                }></input>)
            })}
                </div>
            </div>
           
        <div className="order">
            
            <img className="mainZurag" src={`https://image.tmdb.org/t/p/original${dt1.poster}`}></img>
            <div>
                {/* <h2>Name: </h2>
                <h4 className="textColor">{dt1.name}</h4>
                <h2>Movie name: </h2>
                <h4 className="textColor">{dt1.title}</h4>
                <h2>On :</h2>
                <h4 className="textColor">{dt1.tsag}</h4>
            */}<h2>Ticket </h2> 
                <h4 className="textColor">{anumber + Knumber}</h4>
                <h2>Seat:</h2>
                <h4 className="textColor">{isseat1.map(e=> ` ~ ${e} `)}</h4>
                <h2>Total price:</h2>
                <h4 className="textColor">{ anumber * a + Knumber * h}</h4>
            </div>
            
      </div>
      <div className="bottom"> 
      <Link to="/transaction">
      <button onClick={onclick} className="sameButton">Continue</button>
      </Link>

      
      <Link to="/orders">
      <button onClick={backto} className="sameButton">Back</button>
      </Link>
           
            </div>
        </div>
      
    )
}
export default Payment