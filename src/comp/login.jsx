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
  const Login = () => {
    // Inputs
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
    const auth = getAuth();
    const appVerifier = window.recaptchaVerifier;
 
    const countryCode = "+976";
    const [phoneNumber,setPhoneNumber] = useState(countryCode)
    const [expandForm,setExpandform] = useState(false)


    const generateRecaptcha = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            'expired-callback': () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
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
              alert("code sent")
              setshow(true);
              window.confirmationResult = confirmationResult;
            })
          
                .catch((err) => {
                    alert(err);
                    window.location.reload()
                });
        }
    }
 
   
  
  
    return (
        
<div className='formContainer'>

<form onSubmit={requestOTP}> 

<h1>Sign in with phone number</h1> 

        <div className="mb-3"> 
        <label htmlFor="phoneNunberInput" className="form-label">Phone number</label> 
        <input type="tel" className="form-control" id="phoneNumberInput" aria-describedby="enailhelp" value={phoneNumber} onChange={(e) =>setPhoneNumber(e.target.value)}/>
        <div id="phoneNumberHelp" className="form-text">Please enter your phone number</div> 
</div> 
{expandForm === true ? 
<>
<div className="mb-3"> 
<label htmlFor="otpInput" className="form-label" >0TP</label> 
 <input type="number" className="form-control" id="otpInput" />
<div id="otpHelp" className="form-text">Please enter the one time pin sent to your phones</div>
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