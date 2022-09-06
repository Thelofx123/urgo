import {initializeApp } from 'firebase/app';
import React, { useState ,useEffect} from "react";
import { getAuth } from 'firebase/auth';
import { getFirestore,setDoc ,doc,getDoc,getDocs,collection} from "firebase/firestore";
import { DtCon1 } from './context/setcontext';

const firebaseConfig = {
    apiKey: "AIzaSyC7ap0lpHwHpbFaOoyGyBpEBhxUSICEIR8",
    authDomain: "tester-d4229.firebaseapp.com",
    projectId: "tester-d4229",
    storageBucket: "tester-d4229.appspot.com",
    messagingSenderId: "503060704485",
    appId: "1:503060704485:web:fdf97159fec1fa4a18780c",
    measurementId: "G-SV5K5Y6QCW"
  };
  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app);

  export const textList = (userName,user2,data,data2) =>{
    const cityRef = doc(db, `users/${userName}`);
    const seatRef = doc(db, `seats/${user2}`);
    setDoc(cityRef,  {data});
    setDoc(seatRef,{id:data2},{merge:true});
  }

  export const useGetDocsFromFireBase=(collectionName)=>{
    const [colName,setColName]=useState(collectionName);
    let [data,setDatas]=useState([]);
     const getData=async()=>{
         setDatas(data=[])
     try {
         const datas=await getDoc(doc(db,colName));
         console.log(datas.data().id)
         setDatas(datas.data().id)
     } catch (error) {}
     }
     useEffect(()=>{
       getData()
     },[])
     return [data]
}


