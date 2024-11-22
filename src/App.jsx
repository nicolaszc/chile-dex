import React from 'react'

import { TwitterCallback } from '@ekaruz/react-social-auth';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import Login from '@/views/login/Login'
import LoginForm from '@/views/login/wp-login'
import Handler from '@/components/api/auth'
import Register from '@/views/login/Register'
import Recovery from '@/views/login/Recovery'
import Home from '@/views/home/Home'
import Heritage from '@/views/heritage/Heritage'
import Agenda from '@/views/agenda/Agenda'
import Profile from '@/views/profile/Profile'
import Visited from '@/views/heritage/Visited'
import useToken from '@/components/auth/useToken'

import '@/App.css'

function App() {
  const { setToken } = useToken();
  const token = 'JMJtzsS61mcxf41RdKjqxCU5Rb6g5jJV9iauY2vZegQq7mpi6q3tjG98GxBZleTh';
  const PrivateRoute = ({ component: Component, token, ...rest }) => (
    <Route {...rest} render={props => (
      token ? <Component {...props} /> : <useNavigate to="/login" />
    )} />
  )

  const location = useLocation()
  //const { token } = useToken();

  return (

      <Routes location={location} key={location.key}>
          <Route path='/' element={<Login />} />
          <Route path='/api/auth' element={<Handler />} />
          <Route path='/register' element={<Register />} />
          <Route path='/recovery' element={<Recovery />} />
          <Route path='/wp-login' element={<LoginForm />} />
          <Route exact path='/x-callback' element={<TwitterCallback />} />
          <Route path='/home' element={<Home />} /> 
          <Route path='/heritage' element={<Heritage />} />   
          <Route path='/agenda' element={<Agenda />} /> 
          <Route path='/profile' element={<Profile />} />  
          <Route path='/visited' element={<Visited />} />  
      </Routes> 
  
  );
    
}

export default App
