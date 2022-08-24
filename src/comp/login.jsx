import React, { useState } from "react";
import "../App.css"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signInWithPhoneNumber,RecaptchaVerifier} from "firebase/auth";
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
  import { Navigate ,Link} from 'react-router-dom';
  import {UseauthState1} from "../context/authstate"
  const Login = () => {


    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
    const auth = getAuth();
    const countryCode = "+976";
    const [phoneNumber,setPhoneNumber] = useState(countryCode)
    const [expandForm,setExpandform] = useState(false)
    const {user, setUser} = UseauthState1();

    const generateRecaptcha = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
        
            },
            'expired-callback': () => {
            }
          }, auth);
    }

    const requestOTP = (e)=>{
        e.preventDefault();
        if(phoneNumber.length >= 8){
            setExpandform(true)
            generateRecaptcha()
            let appVerifier = window.recaptchaVerifier
            signInWithPhoneNumber(auth,phoneNumber,appVerifier)
            .then((confirmationResult) => {
                console.log(phoneNumber)
              alert("code sent")
              setUser(true);
              window.confirmationResult = confirmationResult;
            })
                .catch((err) => {
                    alert(err);
                    window.location.reload()
                });
        }
    }
    console.log(user)
    let userUid = "";
    const verifyOTP =(e) =>{
        let otp = e.target.value;
        setotp(otp)
        if(otp.length===6){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) =>{
                const user = result.user
                userUid = user.uid
                setUser(true)
              
            }).catch((error) =>{

            })
        }
    }
    
    const currentUser = auth.currentUser;
 
    return (
                    
            <div className='formContainer'>

                <form onSubmit={requestOTP}> 

                    <h1>Sign in with phone number</h1> 

                        <div className="mb-3"> 
                        <label htmlFor="phoneNunberInput" className="form-label">Phone number</label> 
                        <input type="tel" className="form-control" id="phoneNumberInput" aria-describedby="emailhelp" value={phoneNumber} onChange={(e) =>setPhoneNumber(e.target.value)}/>
                
                         </div>
                                {
                                expandForm === true ? 
                                <>
                                <div className="mb-3"> 
                                <label htmlFor="otpInput" className="form-label" >OTP</label> 
                                <input type="number" className="form-control" id="otpInput" value={otp} onChange={verifyOTP} />
                                </div>
                                </>
                                : null
                                }
                                {
                                expandForm === false ? 
                                <button type="submit" className="btn" >Request OTP</button>
                                :null
                                }
                        
                                <div id={"recaptcha-container"}></div>
                    </form>
                </div>

    );
}
  
export default Login;
//