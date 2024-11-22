import React from 'react'
import ReactDOM from 'react-dom/client'
//import { BrowserRouter } from 'react-router-dom'
//import { AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
//import Footer from './components/footer/Footer'
//import RootClass from './functions/rootClass'

/* function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
  createRoot(document.getElementById('root')).
} */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
  //document.getElementById('root') 
);

