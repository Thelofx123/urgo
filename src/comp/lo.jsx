import React, { useState } from "react";
import "../App.css"
import { Navigate } from 'react-router-dom';
import { useDtCon } from "../context/dataContext";

 const Changer = ({data}) =>{
   
   const [click,useclick] = useState()
   const [active,useactive] = useState(false)
   const {dt, usedt} = useDtCon()

      if(active){
          
            return <Navigate   to="/orders" />
      }
   
    return(
      <div className="card">
           
         {
            <img className="zurag" src={`https://image.tmdb.org/t/p/original${data.poster_path}`}/>
         } 
         <div className="title">{data.name || data.title}</div>
         <div className="title1">{data.release_date}</div>

         <button className="mainButton" onClick={() => {
           
            usedt(data)
            useactive(true)
         }} >More</button>
      </div>
    )
}
export default Changer 