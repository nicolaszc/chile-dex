import React from 'react'
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';

import { ArrowLeft, Filter, Search } from 'react-bootstrap-icons';

import Moneda from '@/assets/img/palacio-moneda.png'
import Museomemoria from '@/assets/img/museo-memoria.png'

import './heritage.css'

function Visited() {
    console.log('heritage')
    return (
        <>
        <Wrapper>
            <Row className='pt-5'>
                <h4 className='text-start'><ArrowLeft className='me-3'/>Patrimonios Visitados (5/3.100)</h4>
                <Form>
                    <Row className='pt-3'>
                        <Col xs={10}>
                            <InputGroup>
                                <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <Button variant="outline-secondary" id="button-addon2" className='btn-heritage rounded-end-pill'><Search /></Button>
                            </InputGroup>
                        </Col>
                        <Col xs={2}>
                        <Button variant="outline-secondary" id="button-addon2" className='btn-heritage rounded-4'><Filter /></Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
            <Row className='pt-5'>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Moneda} className='w-100' />
                    </div>
                    <p className='text-heritage-photo'>Cerro Santa Lucía</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museomemoria} className='w-100' />
                    </div>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Moneda} className='w-100' />
                    </div>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museomemoria} className='w-100' />
                    </div>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Moneda} className='w-100' />
                    </div>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museomemoria} className='w-100' />
                    </div>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Moneda} className='w-100' />
                    </div>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museomemoria} className='w-100' />
                    </div>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Moneda} className='w-100' />
                    </div>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museomemoria} className='w-100' />
                    </div>
                </Col>
            </Row>
        </Wrapper>  
        </>
    )
}
export default Visited