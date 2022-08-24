import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import Coming from './comp/coming';
import Order from './comp/order';
import Price from './comp/price';
import {UseauthState1} from "./context/authstate"
import { getAuth,onAuthStateChanged,signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
  let navigate = useNavigate();
  const {user, setUser} = UseauthState1()
  const auth = getAuth();
  const [check,setCheck] = React.useState(false)

 
     const onclick = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
          console.log("signed out")
          setUser(false);
          navigate("../login", { replace: true });
        }).catch((error) => {

        });
      }
      
  return (
  
    <div className='navbar'> 
    <div className='half'>
    <img className='zurag2' src='https://upload.wikimedia.org/wikipedia/commons/a/aa/Urgoo_Logo.png'/>
        <div className='yum2'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/soon">Coming soon</Link></li>
          <li><Link to="/orders">Order</Link></li>
          <li><Link to="/price">Price</Link></li>
         
          <li>{user ? <button onClick={onclick} className="logoutBtn">Logout</button> :  <li><Link to="/login">Login</Link></li>}
          </li>
         
        </div>
    </div>
 
    </div>
   
   
  );
};
export default ResponsiveAppBar;