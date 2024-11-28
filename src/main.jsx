import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import Footer from './components/footer/Footer'
import RootClass from './functions/RootClass'

import './index.css'

function LocationProvider({ children }) {
  
  return <AnimatePresence>{children}</AnimatePresence>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BrowserRouter>
    
        <LocationProvider>
          <App /> 
        </LocationProvider>   
        <RootClass/>

      </BrowserRouter>
   
  </React.StrictMode>
);

