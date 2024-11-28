import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';

import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'


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
                    <h1>Perfil</h1>
                    <Form id='profile-form' onSubmit={handleClick} className='login-form' noValidate>
                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Col>                   
            </Row>   
        </Wrapper> 
        </>
    )
}
export default Profile