import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';

import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'


function Profile() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/nz/wp-json/nz_API/v1/test_API')
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return (
        <>
        <Wrapper>
            <Row>
                <Col className='mt-5'>
                    <h1>Perfil</h1>
                    <NavLink to='/' >
                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                    </NavLink>
                </Col>                   
            </Row>   
        </Wrapper> 
        </>
    )
}
export default Profile