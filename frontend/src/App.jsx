 import React from 'react'
import UserForm from './Components/UserForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import GetAllRecs from './Components/GetAllRecs';
import Navbar from './Components/Navbar';

 
 const App = () => {
   return (
     <>
      <BrowserRouter>
      <Navbar/>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/login' element={<UserForm/>}/>
             <Route path='/getrec' element={<GetAllRecs/>}/>
         </Routes>
      </BrowserRouter>
      </> 
     
   )
 }
 
 export default App
 