import React from 'react';
import { motion } from "framer-motion"
//import { domAnimations } from "framer-motion"
//export { domAnimations }
import { Container } from 'react-bootstrap'
import './wrapper.css'

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      duration:1.25,
    },
  },
}

function Wrapper({ children }){
  return(
  <>
    <motion.section variants={routeVariants}
    initial='initial'
    animate='final'
    className='wrapper px-2'>
        <Container>
            {children}
        </Container>
    </motion.section>
  </>
)
};

export default Wrapper;