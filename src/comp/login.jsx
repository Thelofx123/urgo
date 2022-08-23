import React, { useState } from "react";
import "../App.css"
import auth from "../firebase"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signInWithPhoneNumber} from "firebase/auth";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    setDoc,
    doc,
    getDoc,
    collectionGroup, 
    where,
    query,
    onSnapshot,
    CollectionReference
  } from 'firebase/firestore'
  import {db} from "../firebase"
 const Login = () =>{
    const [active,useactive] = useState(true)
    const [info,setInfo] = useState({})
    const onchange = (e) =>{
        e.preventDefault();
        setInfo({...info,[e.target.name]:e.target.value})
    }   
   let uid
      
      
   const submit = () =>{
       console.log(info)
       if(active){
           
        const auth = getAuth();
        const phone = info.phone
        const password = info.password
       
        // const phoneNumber = getPhoneNumberFromUserInput();
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
           
            window.confirmationResult = confirmationResult;
         
            }).catch((error) => {
           
            });
       }
       else{
        const auth = getAuth();
        const email = info.email
        const password = info.password
        const name = info.name
        const number = info.number
        createUserWithEmailAndPassword(auth, email, password,name,number)
             .then((userCredential) => {
             const user = userCredential.user;
             const userUid = userCredential.user.uid;
             console.log("done");
             
             setDoc(doc(db, "users",userUid), {
                email,
                name,
                number,
             },{merge: "true"});
             useactive(true)
             })
             .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
              console.log("nope")
             });
       }
      
            
    }

   
    //   if(active){
          
    //         return <Navigate   to="/orders" />
    //   }
    const switch1 = () =>{
        useactive(!active)
        setInfo('')
      
    }
   
    return(
        <div>
            { 
            active ?
                    <div className="login">
                                
                    <div className="input" onChange={onchange}>
                        <label>Phone number  </label>
                        <input name="phone" type="number" />
                        <label>  Password  </label>
                        <input name="password" type="password"  onChange={onchange}/>
                        <div>
                        <button onClick={submit} >Submit</button>
                        </div>
                    </div>
                    
                    </div>  
            :
            <div className="Signup">
                                
            <div className="input" onChange={onchange}>
                <label>Name</label>
                <input name="name" type="text" onChange={onchange}/>
                <label>Phone Number</label>
                <input name="number" type="number" onChange={onchange}/>
                <label>Email</label>
                <input name="email" type="email" onChange={onchange}/>
                <label>Password</label>
                <input name="password" type="password"  onChange={onchange}/>
                <div>
                <button onClick={submit} >Submit</button>
                </div>
            </div>
            
            </div>  
            }
        <button onClick={switch1}>{active? "sign up" : "Back to log in"}</button>
        </div>   
    )
         
}
export default Login 