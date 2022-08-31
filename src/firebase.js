import {initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore,setDoc ,doc,getDoc} from "firebase/firestore";
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

  export const dataFetch =   async (path,path2)=>{
     const {dt,useDt,dt2,useDt2} = DtCon1()
    const getData=  await getDoc(doc(db,`seats/${path}`))
    .then ((item) =>{
        useDt( item.data().id)   
      
  }) 
  const getData1=  await getDoc(doc(db,`users/${path2}`))
  .then ((item) =>{
    useDt2( item.data().movie)   

}) 
}
