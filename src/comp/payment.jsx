import React, { useState ,useEffect} from "react";
import { useContext } from "react";
import "../App.css"
import { Navigate } from 'react-router-dom';
import { useDtCon } from "../context/dataContext";
import { useObjCon } from "../context/objContext";
import { useTestCon } from "../context/testContext";
import { collection , onSnapshot,addDoc ,getDoc,getDocs,doc, setDoc,updateDoc} from 'firebase/firestore';
import {db} from "../firebase"
import {Link, Routes ,Route} from "react-router-dom";
import { async } from "@firebase/util";
import Transaction from "./transaction";


 const Payment = () =>{
    const seats = document.getElementsByClassName("seat")
    let seat = new Array(30).fill();
    const {dt1, usedt1} = useObjCon()
    let a = 10000;
    let h = 8000;
    const [index,useindex] = useState([])
    const [isclicked,setisclicked] = useState([])
    const {isId, setIsId} = useTestCon()
    const [isseat,useisseat] = useState([])
    const [isseat1,useisseat1] = useState([])
    let count = parseInt(dt1.Anumber) + parseInt(dt1.knumber)
    let checker = [];
 
    const auto = async () =>{
        const getData=  await getDoc(doc(db,`movies/${dt1.id}`))
       .then ((item) =>{
     
            useindex( item.data().id)   
          
      }) 
  }

  useEffect(() => {
    auto();   
     },[])
   
    const onchange = (e) =>{
        
            let ids=   parseInt(e.target.getAttribute("id"))
                       if(!isclicked.includes(ids)){
                        setisclicked( prev => 
                            [...prev,...index, ids])
                            useisseat([...isseat,ids])

                            useisseat1( prev => [...prev,ids])
                        }
                       
                    
                        else{
                            setisclicked(
                            isclicked.filter(item => item !== ids)
                            )
                            useisseat1(
                                isseat1.filter(item => item !== ids)
                                )
                        }
                        console.log(isseat1)
            }
          
    const onclick = () =>{
        const cityRef = doc(db, `movies/${dt1.id}`);
        setDoc(cityRef, {id:isclicked},{merge:true} );
        setIsId({...isId,["title"]:dt1.name || dt1.title , ["poster"]:dt1.poster,["id"]:dt1.id,["name"]:dt1.name,["time"]:dt1.tsag,["seat"]:isseat1,["backdrop"]:dt1.backdrop })
    }
  
    const backto = () =>{ 
        return <Navigate   to="/orders" />
    }


    return(
        <div  className="full" >
            <div className="top">
                <div className="row" > 
                {seat.map((e,l) =>{
                
                return(<input className="seat"  onChange={onchange} id={l} type="checkbox" disabled={ 
                    index.length === 0 ? false :  index.includes(l) ? true : false                
                }></input>)
            })}

                </div>
            </div>
           
        <div className="order">
            
            <img className="mainZurag" src={`https://image.tmdb.org/t/p/original${dt1.poster}`}></img>
            <div>
                <h2>Name: </h2>
                <h4 className="textColor">{dt1.name}</h4>
                <h2>Movie name: </h2>
                <h4 className="textColor">{dt1.title}</h4>
                <h2>On :</h2>
                <h4 className="textColor">{dt1.tsag}</h4>
                <h2>Ticket </h2>
                <h4 className="textColor">{isNaN()?0:count}</h4>
                <h2>Seat:</h2>
                <h4 className="textColor">{isseat.map(e =>  ` ${e} `) }</h4>
                <h2>Total price:</h2>
                <h4 className="textColor">{ isNaN() ? 0 : parseInt(dt1.Anumber)*a + parseInt(dt1.knumber)*h }</h4>
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