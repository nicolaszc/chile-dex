import React from 'react'
import { TwitterCallback } from '@ekaruz/react-social-auth';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import '@/App.css'
import Login from '@/views/login/Login'
import XcallBack from '@/views/login/XcallBack'
import Register from '@/views/register/Register'
import Home from '@/views/home/Home'
import Heritage from '@/views/heritage/Heritage'
import Agenda from '@/views/agenda/Agenda'
import Profile from '@/views/profile/Profile'
import Footer from '@/components/footer/Footer'
import RootClass from '@/functions/RootClass'
function App() {
  //const location = useLocation()
  //console.log(location)
  function LocationProvider({ children }) {
    return <AnimatePresence>{children}</AnimatePresence>;
  }
  //<Route exact path='/x-callback' element={TwitterCallback} />  
  // <Route exact path='/x-callback' element={<TwitterCallback />} />
  return (
    <BrowserRouter>
   
        <Routes>     
          <Route path='/' element={<Login />} >
            <Route path='/register' element={<Register />} />
            <Route exact path='/x-callback' element={<TwitterCallback />} />
            <Route path='/home' element={<Home />}/> 
            <Route path='/heritage' element={<Heritage />} />   
            <Route path='/agenda' element={<Agenda />} /> 
            <Route path='/profile' element={<Profile />} />
          </Route>  
        </Routes> 

      <Footer />
      <RootClass/>
    </BrowserRouter>  
    
  );
    
}

export default App
