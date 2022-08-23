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


const ResponsiveAppBar = () => {
  
  return (
  
    <div className='navbar'> 
    <div className='half'>
    <img className='zurag2' src='https://upload.wikimedia.org/wikipedia/commons/a/aa/Urgoo_Logo.png'/>
        <div className='yum2'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/soon">Coming soon</Link></li>
          <li><Link to="/orders">Order</Link></li>
          <li><Link to="/price">Price</Link></li>
          <li><Link to="/login">Login</Link></li>
        </div>
    </div>
 
    </div>
   
   
  );
};
export default ResponsiveAppBar;