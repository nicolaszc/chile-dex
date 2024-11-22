import React from 'react'
import { motion, transform } from "framer-motion";
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Stack from 'react-bootstrap/Stack'

import QrIcon from '@/assets/img/qr-icon.svg'
import { PersonCircle, CalendarWeek, Map, House } from 'react-bootstrap-icons';

import './footer.css'

const footerVariants = {
    initial: {
      /* bottom: '100px', */
      style:{
        opacity:'0',
        },
    },
    final: {
      /* bottom: '0', */
      style:{
        opacity:'1',
        },
    },
}

function Footer() {

    const { pathname } = useLocation();
    if (pathname === '/' || pathname === '/register' || pathname === '/recovery') {
        //console.log(pathname)     
        return <></>;
    }

    return (
    <>
    <AnimatePresence>i
        <motion.footer className='footer position-fixed bottom-0' initial={{y:'100vh'}} style={{ opacity: 0 }} animate={{ opacity: 1, y:0 }} transition={{duration:1}} >
            <Stack direction='horizontal' className='justify-content-around align-items-center py-3'>
                <NavLink to='/home' className='d-inline-block text-center menu-item' ><House size='32'/><small>Inicio</small></NavLink>
                <NavLink to='/heritage' className='d-inline-block text-center menu-item'><Map size='32'/><small>Patrimonio</small></NavLink>
                <NavLink to='/' className='icon-button'><img src={QrIcon} /></NavLink>
                <NavLink to='/agenda' className='d-inline-block text-center menu-item'><CalendarWeek size='32'/><small>Agendar</small></NavLink>
                <NavLink to='/profile' className='d-inline-block text-center menu-item'><PersonCircle size='32'/><small>Perfil</small></NavLink>
            </Stack>
        </motion.footer>
    </AnimatePresence>       
    </>
    )
}
export default Footer