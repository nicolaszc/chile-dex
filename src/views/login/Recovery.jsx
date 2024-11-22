import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';

import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Button, Form } from 'react-bootstrap'
import Logo from '@/assets/img/logo_chiledex.svg'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import './login.css'

function Recovery(){
    
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const REGISTER_REDIRECT_URI = '/'

    const handleSubmit = (e) => {
        
           e.preventDefault() 
        
        
        navigate(REGISTER_REDIRECT_URI)
    }


    
    return (
    <>
        <Wrapper>
            <Row>
                <Col xs={{ span: 8, offset: 2 }} className='mt-4 mb-5 px-4'>
                    <img src={Logo} className='w-75 mx-auto' />
                </Col>
                
                <Col xs={{ span: 10, offset: 1 }} className='mt-3'>
                    <Form id='login-form' onSubmit={handleSubmit} className='login-form'>
                        <Form.Group className='mb-5' controlId='formBasicEmail'>
                            <Form.Control type='email' placeholder='Correo Electrónico' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                        
                        <Button variant='primary' type='submit' className='rounded-pill w-100mt-3 rounded-pill w-100 btn btn-primary py-2 fw-semibold lh-lg'>
                            Submit
                        </Button>
                    </Form>
                    <p className='my-4'>¿No tienes cuenta? <NavLink to='/register' >Regístrate</NavLink></p>
                    <p className='mb-5'><NavLink to='/' >Volver al login</NavLink></p>
                </Col>
                

                
            </Row>
        </Wrapper>                               
    </>
    )
}    
export default Recovery