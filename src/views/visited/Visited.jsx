import React from 'react'
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';

import { ArrowLeft, Filter, Search } from 'react-bootstrap-icons';

import Bancochile from '@/assets/img/casa-matriz-bancochile.png'
import Casalosdiez from '@/assets/img/casa-los-diez.png'
import Centromoneda from '@/assets/img/centro-cultural-lamoneda.png'
import Feriastalucia from '@/assets/img/feria-artesanal-santalucia.png'
import Mapocho from '@/assets/img/estacion-mapocho.png'
import Moneda from '@/assets/img/palacio-dela-moneda.png'
import Museociencia from '@/assets/img/museo-ciencia-tecnologia.png'
import Museoferroviariostgo from '@/assets/img/museo-ferroviario.png'
import Museomemoria from '@/assets/img/museo-dela-memoria.png'
import Museonatural from '@/assets/img/museo-natural.png'
import Museoprecolombino from '@/assets/img/museo-arte-precolombino.png'
import Plazaarmas from '@/assets/img/plaza-armas.png'
import Stalucia from '@/assets/img/cerro-sta-lucia2.png'
import Teatromunistgo from '@/assets/img/teatro-municipal-stgo.png'

import './visited.css'

function Visited() {
    console.log('visited')
    return (
        <>
        <Wrapper>
            <Row className='pt-5'>
                <h5 className='text-start'><ArrowLeft className='me-3'/>Patrimonios Visitados <span className='small-text-start'>(5/3.11)</span></h5>
                <Form>
                    <Row className='pt-3'>
                        <Col xs={10}>
                            <InputGroup>
                                <Form.Control placeholder="Busca aquí" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <Button variant="outline-secondary" id="button-addon2" className='btn-heritage rounded-end-pill'><Search /></Button>
                            </InputGroup>
                        </Col>
                        <Col xs={2}>
                        <Button variant="outline-secondary" id="button-addon2" className='btn-heritage rounded-4'><Filter /></Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
            <Row className='pt-5 patrimonio'>
                <Col xs={6} className='md-4 mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Stalucia} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Cerro Santa Lucía</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museonatural} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Museo Nacional de Historia Natural</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museociencia} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Museo de Ciencia y Tecnología</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museoferroviariostgo} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Museo Ferroviario de Santiago</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museomemoria} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Museo de la Memoria y los Derechos Humanos</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Mapocho} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Centro Cultural Mapocho</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museoprecolombino} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Museo Chileno de Arte Precolombino</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Plazaarmas} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Plaza de Armas</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Centromoneda} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Centro Cultural La Moneda</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Moneda} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Palacio de La Moneda</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Teatromunistgo} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Teatro Municipal de Santiago</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Bancochile} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Casa Matriz Banco de Chile</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Casalosdiez} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Casa de Los Diez</p>
                </Col>
                <Col xs={6} className='mb-3'>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Feriastalucia} className='w-100 visited-img' />
                    </div>
                    <p className='text-heritage-photo'>Feria Artesanal Santa Lucia</p>
                </Col>
            </Row>
        </Wrapper>  
        </>
    )
}
export default Visited