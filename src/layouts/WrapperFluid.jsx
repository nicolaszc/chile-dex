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

function WrapperFluid({ children }){
  return(
  <>
    <motion.section variants={routeVariants}
    initial='initial'
    animate='final'
    className='wrapper ps-2'>
        <Container fluid className='pe-0'>
            {children}
        </Container>
    </motion.section>
  </>
)
};

export default WrapperFluid;