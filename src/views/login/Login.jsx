import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';
//import { useRouter } from 'next/router'
import { useLocation } from 'react-router-dom';
//import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTwitterConnection} from '@ekaruz/react-social-auth'
import useToken from '@/components/auth/useToken'

import { Button, Form } from 'react-bootstrap'
import Logo from '@/assets/img/logo_chiledex.svg'
import FacebookIcon from '@/assets/img/facebook-icon.svg'
import XIcon from '@/assets/img/x-icon.svg'
import GoogleIcon from '@/assets/img/google-icon.svg'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import './login.css'

function Login(){

    const [usermail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [validate, setValidate] = useState('')
    const { setToken } = useToken();
    const [type, setType] = useState('password')
    const [iconEye, setIconEye] = useState(<EyeSlash size='24' color='#666' />)
    //const fetcher = useFetcher()
    const REDIRECT_BASE = location.href
    const X_REDIRECT_URI = REDIRECT_BASE + 'x-callback'
    const LOGIN_REDIRECT_URI = '/home'
    const navigate = useNavigate()

    const validateForm = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        const isEmailValid = emailRegex.test(usermail);
        const isPasswordValid = password.length > 6; // Example criteria
        return isEmailValid && isPasswordValid;   
    }

    //const handleSubmit = async (e) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setValidate("Ingrese un correo y contraseña validos");
            return;
        }
        setToken('JMJtzsS61mcxf41RdKjqxCU5Rb6g5jJV9iauY2vZegQq7mpi6q3tjG98GxBZleTh');
        navigate("/home")
    }
    
    function submitUser(e) {
        e.preventDefault()
        axios.post('/api/auth', {
          body: ({ usermail, password }),
        })
          .then((response) => {
            setPost(response.data);
          });
          
    }

    /* const userLogin = () => {
        setToken(Math.floor(Math.random() * 1000000000))
        setEmail('')
        setPassword('')
        setValidate('')
    }
 */
    const handleToggle = () => {
        if (type==='password'){
           setIconEye(<Eye size='24' color='#666' />)
           setType('text')
        } else {
           setIconEye(<EyeSlash size='24' color='#666' />)
           setType('password')
        }
    }

    // Access Token: 1267607840-yQUuCY5yYYmeV0YjBbhB2dCF4KthuEcma27zKw7
    // Access Token Secret: 4O3lWx790rKQtotibxKDnJErgop0AM3r6FP4sC0g3WvIL

    // API Key: ligJUUPHTnAy4Rxb6xbjLjfXy
    // API Key Secret: m8Vm5AETi0AqY2zRbFV6vMiLtqaHLX5awsBUpbv1z7WThF1ABq

    // Bearer Token: AAAAAAAAAAAAAAAAAAAAANwFwwEAAAAA%2BAAwUXmxrY%2B3NAaIXiTd3Iv5EQc%3D3EHRD9ciQCOStU9pE4Uw7mP6BeifX3GBlAEhHUMMlUJfOgK2bP

    // Client Secret: LSHoMD53cSqwxLn96k5aAHOvs0ffgzfGO4hhtWp6lRrppNlAcA
    //window.location.origin

    const {onTwitterConnect, isLoading, twitterData } = useTwitterConnection({
        clientId: 'VmZrUmVVUlVHOHQ5aXZwR0I5WWE6MTpjaQ',
        clientKeys: 'LSHoMD53cSqwxLn96k5aAHOvs0ffgzfGO4hhtWp6lRrppNlAcA',
        redirectUri: X_REDIRECT_URI,
        isOnlyGetCode: true,
        isOnlyGetToken: true,
    });

    if( twitterData.data != undefined ) {
        console.log("twitterData:::", twitterData)
    }
    
    return (
        <>
            <Wrapper>
                <Row>
                    <Col xs={{ span: 8, offset: 2 }} className='mt-4 mb-5 px-4'>
                        <img src={Logo} className='w-75 mx-auto' />
                    </Col>
                    
                    <Col xs={{ span: 10, offset: 1 }} className='mt-3'>
                        <Form id='login-form' onSubmit={handleSubmit} className='login-form' noValidate>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Control type='email' placeholder='Correo Electrónico' value={usermail} onChange={(e) => setMail(e.target.value)} required/>
                            </Form.Group>
                            <Form.Group className='mb-5 position-relative' controlId='formBasicPassword'>
                                <Form.Control type={type} placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <span className='position-absolute end-0 top-0 me-2 mt-2' onClick={handleToggle} >{iconEye}</span>
                                <p className='validate position-absolute'>{validate}</p>
                            </Form.Group>
                            
                            <Button variant='primary' type='submit' className='rounded-pill w-100mt-3 rounded-pill w-100 btn btn-primary py-2 fw-semibold lh-lg'>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-4 mb-0'><NavLink to='/recovery' >¿Olvidaste tu contraseña?</NavLink></p>
                        <p className='mt-5 mb-0'>o</p>
                    </Col>
                    
                    <Col xs={{ span: 10, offset: 1 }} className='mt-5 mb-5'>

                        <Button id='btn-facebook' variant='facebook' className='rounded-pill w-100mt-3 rounded-pill w-100 py-2 fw-semibold lh-lg mb-3' onClick={handleSubmit} >
                            <img src={FacebookIcon} className='me-2' /> Continuar con Facebook
                        </Button>

                        <Button id='btn-x' variant='x' className='rounded-pill w-100mt-3 rounded-pill w-100 py-2 fw-semibold lh-lg mb-3'  onClick={handleSubmit} >
                            <img src={XIcon} className='me-2' /> Continuar con X
                        </Button>

                        <Button id='btn-google' variant='google' className='rounded-pill w-100mt-3 rounded-pill w-100 py-2 fw-semibold lh-lg' onClick={handleSubmit} >
                            <img src={GoogleIcon} className='me-2' /> Continuar con Google
                        </Button>

                    </Col>

                    <p className='mb-5'>¿No tienes cuenta? <NavLink to='/register' >Regístrate</NavLink></p>
                </Row> 
            </Wrapper>                    
        </>
    )
}    
export default Login