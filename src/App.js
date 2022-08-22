
import './App.css';
import ResponsiveAppBar from './navbar';
import {useMovieContext} from './context/newContext'
import {useContext, useState} from "react"
import Changer from "./comp/lo"
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import Coming from './comp/coming';
import Order from './comp/order';
import Price from './comp/price';
import { TestProvider } from './context/dataContext';
import {ObjProvider} from './context/objContext'
import { TProvider } from './context/testContext';
import Payment from './comp/payment';
import Transaction from './comp/transaction';
function App() {
  const { items } =useMovieContext()
  const { data, isLoading } = useMovieContext();
  let arr = []
  arr= items.results


  return (
   
    <div className='main'>
      <TestProvider>
        <ObjProvider>
          <TProvider>
      <ResponsiveAppBar></ResponsiveAppBar>
     
  
    <Routes>
          <Route path="/" element={    !isLoading ?  arr.map(e => (
          <Changer data={e} ></Changer>
        )) : <p>Loading...</p>}/>
          <Route path="/soon" element={<Coming />} >
          </Route>
          <Route path="/orders" element={<Order />} >
          </Route>
          <Route path="/price" element={<Price />} >
          </Route>
          <Route path="/payment" element={<Payment />} >
          </Route>
          <Route path="/transaction" element={<Transaction />} >
          </Route>
        </Routes>
        </TProvider>
        </ObjProvider>
        </TestProvider>
    </div> 
    
      
  
  );
}

export default App;