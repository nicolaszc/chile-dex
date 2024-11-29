
import React, {useCallback} from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { useEffect, useState, useRef } from 'react'
import { TwitterCallback } from '@ekaruz/react-social-auth';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Login from '@/views/login/Login'
import LoginForm from '@/views/login/wp-login'
import Handler from '@/components/api/auth'
import Register from '@/views/login/Register'
import Recovery from '@/views/login/Recovery'
import Home from '@/views/home/Home'
import Heritage from '@/views/heritage/Heritage'
import Yungay from '@/views/heritage/Yungay'
import EstacionMapocho from '@/views/heritage/EstacionMapocho'
import SantaLucia from '@/views/heritage/SantaLucia'
import Agenda from '@/views/agenda/Agenda'
import Profile from '@/views/profile/Profile'
import Visited from '@/views/visited/Visited'
import useToken from '@/components/auth/useToken'
import QrScanner from './components/qrscanner/QrScanner'
import { Fullscreen, FullscreenExit, XCircle } from 'react-bootstrap-icons'
import '@/App.css'


function App() {
  //const navigate = useNavigate()
  const [modalClose, setModalClose] = useState('')
  const handle = useFullScreenHandle()
  const [iconScreen, setIconScreen] = useState(<Fullscreen size='24' color='#666' onClick={handle.enter}/>)
  
  const location = useLocation()
  //const { pathname } = useLocation();
  /* if (location == '/yungay' || location == '/santa-lucia' || location == '/estacion-mapocho') {
    /etModalClose(<XCircle size='24' color='#666' onClick={(e)=>navigate('/heritage')}/>)    
  }else{
    setModalClose('')
  } */

 

  const reportChange = useCallback((state, handle) => {
      if(state){
        setIconScreen(<FullscreenExit size='24' color='#666' onClick={handle.exit}/>)
      }else{
        setIconScreen(<Fullscreen size='24' color='#666' onClick={handle.enter}/>)
      }
    });

  return (
    <FullScreen handle={handle} onChange={reportChange}>
      <header className='position-absolute end-0 top-0 me-2 mt-2 z-3'r>
        <span>{iconScreen}</span>
        <span><XCircle className='ms-2 d-none' size='24' color='#666' onClick={(e)=>navigate('/heritage')}/></span>
      </header>     
      <Routes location={location} key={location.key}>
          <Route path='/' element={<Login callFunction={handle.enter}/>} />
          <Route path='/api/auth' element={<Handler />} />
          <Route path='/register' element={<Register />} />
          <Route path='/recovery' element={<Recovery />} />
          <Route path='/wp-login' element={<LoginForm />} />
          <Route exact path='/x-callback' element={<TwitterCallback />} />
          <Route path='/home' element={<Home />} /> 
          <Route path='/heritage' element={<Heritage />} />   
          <Route path='/agenda' element={<Agenda />} /> 
          <Route path='/profile' element={<Profile callFunction={handle.exit}/>} />  
          <Route path='/visited' element={<Visited />} /> 
          <Route path='/qrscanner' element={<QrScanner />} />   
          <Route path='/yungay' element={<Yungay />} /> 
          <Route path='/estacion-mapocho' element={<EstacionMapocho />} /> 
          <Route path='/santa-lucia' element={<SantaLucia />} /> 
      </Routes> 
      <Footer />                   
      
  </FullScreen>
  );
    
}

export default App
