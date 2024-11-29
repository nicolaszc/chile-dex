import React from 'react'
import { Row, Col, Form, ListGroup } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';
import { CardList, Bell, Translate, Lock, Database, CircleHalf, QuestionCircle } from 'react-bootstrap-icons';

import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import { ArrowLeftCircle } from 'react-bootstrap-icons';

import Profilepic from '@/assets/img/profile-pic.png'

import './profile.css'


function Profile({callFunction}) {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8888/nz/wp-json/nz_API/v1/test_API')
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    const handleClick = (e) => {
        e.preventDefault()
        callFunction()
        navigate("/")
    }
    return (
        <>
       
        <Wrapper>
            <Row>
                <Col className='mt-5'>
                    <img src={Profilepic} className='rounded-circle mb-4'></img>
                    <h1>Shiro</h1>
                    <Form id='profile-form' onSubmit={handleClick} className='login-form' noValidate>
                    <ListGroup className='mt-4 mx-4 opciones'>
                        <ListGroup.Item><CardList size= '20'className='me-3'/>Editar informaciones</ListGroup.Item>
                        <ListGroup.Item><Bell size='20'className='me-3'/>Notificaciones</ListGroup.Item>
                        <ListGroup.Item><Translate size='20'className='me-3'/>Idioma</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className='mt-4 mx-4 opciones'>
                        <ListGroup.Item><Lock size='20'className='me-3'/>Privacidad</ListGroup.Item>
                        <ListGroup.Item><CircleHalf size='20'className='me-3'/>Tema</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className='mt-4 mx-4 opciones'>
                        <ListGroup.Item><QuestionCircle size='20'className='me-3'/>Ayuda</ListGroup.Item>
                        <ListGroup.Item><Database size='20'className='me-3'/>Almacenamiento y datos</ListGroup.Item>
                    </ListGroup>
                        <Button variant='profile' type='submit' className='rounded-pill mt-5'>
                            Cerrar sesión
                        </Button>
                        <p className='mt-5'> <NavLink to={'/'}>Eliminar cuenta</NavLink> </p>
                    </Form>
                </Col>                   
            </Row>   
        </Wrapper> 
        </>
    )
}
export default Profile