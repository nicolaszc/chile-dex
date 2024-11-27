import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import Wrapper from '@/layouts/Wrapper';
import WrapperFluid from '@/layouts/WrapperFluid';
import Carousel from '@/components/carousel/Carousel';

import iconoPatrimonio from '@/assets/img/building-columns-solid.svg'
import iconoRuta from '@/assets/img/route-solid.svg'
import Logo from '@/assets/img/logo-nuevo_chiledex.svg'
import Grafico from '@/assets/img/grafico.png'

import Bellavista from '@/assets/img/barrio-bella.png'
import Embalseyeso from '@/assets/img/elyeso.png'
import Santalucia from '@/assets/img/santa-lucia.png'
import Moneda from '@/assets/img/palacio-moneda.png'
import Museomemoria from '@/assets/img/museo-memoria.png'
import Carousel1 from '@/assets/img/carousel-1.png'
import Carousel2 from '@/assets/img/carousel-2.png'
import Carousel3 from '@/assets/img/carousel-3.png'

import './home.css'

function Home() {
    
    return (
        <>
        <Wrapper className='pb-0'>
            <Row>
                <Col xs={{ span: 8, offset: 2 }} className='my-4'><img src={Logo} className='w-50 mx-auto' /></Col>
            </Row>
            <Row>
                <Col xs={6} className='d-flex'>
                    <NavLink to='/visited' className=' btn btn-outline-secondary heritage w-100 p-4 rounded-4 d-flex flex-column align-items-center justify-content-center'>
                       
                            <img src={iconoPatrimonio} className='w-25 mx-auto' />
                            <p className='pt-3 mb-0 fw-semibold'>Patrimonios visitados</p>
                                            
                    </NavLink>
                </Col>
                <Col xs={6} className='d-flex'>
                    <NavLink to='/agenda' className=' btn btn-outline-primary visit-plan w-100 p-4 rounded-4 d-flex flex-column align-items-center justify-content-center'>
                        
                            <img src={iconoRuta} className='w-25 mx-auto' />
                            <p className='pt-3 mb-0 fw-semibold'>Planear visitas</p>
                                              
                    </NavLink>
                </Col>
            </Row>
        </Wrapper> 
        <WrapperFluid>
            <Row className='mt-4'>
                <Carousel>
                    <div className='pe-2 carousel-slide'>
                        <img src={Carousel1} className='w-100 rounded-4' />
                        <div className='overlay'>
                            <h3>Patrimonio Virtual:</h3>
                            <p>Visita los recorridos patrimoniales más relevantes del país de manera inmersiva en {' '} <a href='https://patrimoniovirtual.gob.cl'>patrimoniovirtual.gob.cl</a>
                            </p>
                        </div>
                    </div>
                    <div className='pe-2 carousel-slide'>
                        <img src={Carousel2} className='w-100 rounded-4' />
                        <div className='overlay'>
                            <h3>Recorridos sonoros:</h3>
                            <p>Sumérgete en las historias de diversos patrimonios del país con los recorridos sonores disponibles en {' '} <a href='https://patrimoniovirtual.gob.cl/recorridos-sonoros-2'>patrimoniovirtual.gob.cl</a>
                            </p>
                        </div>
                    </div>
                    <div className='pe-2 carousel-slide'>
                        <img src={Carousel3} className='w-100 rounded-4' />
                        <div className='overlay'>
                            <h3>Cartelera patrimonial:</h3>
                            <p>Explora las diversas actividades y muestras culturales de todo el país disponibles en {' '} <a href='https://www.patrimoniocultural.gob.cl/cartelera/red-nacional'>patrimoniocultural.gob.cl</a>
                            </p>
                        </div>
                    </div>
                </Carousel>
            </Row>
        </WrapperFluid>
        <Wrapper> 
            <Row>
                <Col>
                    <div className='w-100 rounded-4 overflow-hidden my-4 chart'>
                        <img src={Grafico} className='w-100' />
                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col xs={12} className='mb-4'>
                    <h2 className='text-start mb-3'>Patrimonios más visitados en Santiago</h2>
                    {/* 1er lugar */}
                    <div className='image-holder overflow-hidden mt-4 rounded-4'>
                        <img src={Santalucia} className='w-100 rounded-4' />
                        <div className='text-overlay w-100 p-2'>
                            <p className='mb-0'>Cerro Sta. Lucia</p>
                        </div>
                        <div className='badge-1 m-2'>1°</div>
                    </div>
                </Col>
                <Col xs={6} className='mb-4'>
                    {/* 2do lugar */}
                    <div className='image-holder-mini rounded-4 overflow-hidden'>
                        <img src={Moneda} className='w-100 rounded-4' />
                        <div class="text-overlay w-100 p-2">
                            <p class="mb-0">Palacio de la Moneda</p>
                        </div>
                        <div class="badge-2 m-2">2°</div>
                    </div>
                </Col>
                <Col xs={6} className='mb-4'>
                    {/* 3er lugar */}
                    <div className='image-holder-mini rounded-4 overflow-hidden'>
                        <img src={Museomemoria} className='w-100 rounded-4' />
                        <div class="text-overlay w-100 p-2">
                            <p class="mb-0">Museo de la Memoria y los DD.HH</p>
                        </div>
                        <div class="badge-3 m-2">3°</div>
                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col xs={12} className='mb-4'>
                    <h2 className='text-start mb-3'>Patrimonios más visitados en la Región Metropolitana</h2>
                    {/* 1er lugar */}
                    <div className='image-holder rounded-4 overflow-hidden mt-4'>
                        <img src={Santalucia} className='w-100 rounded-4' />
                        <div className='text-overlay w-100 p-2'>
                            <p className='mb-0'>Cerro Sta. Lucia</p>
                        </div>
                        <div className='badge-1 m-2'>1°</div>
                    </div>
                </Col>
                <Col xs={6} className='mb-4'>
                    {/* 2do lugar */}
                    <div className='image-holder-mini rounded-4 overflow-hidden'>
                        <img src={Bellavista} className='w-100 rounded-4' />
                        <div class="text-overlay w-100 p-2">
                            <p class="mb-0">Barrio Bellavista</p>
                        </div>
                        <div class="badge-2 m-2">2°</div>
                    </div>
                </Col>
                <Col xs={6} className='mb-4'>
                    {/* 3er lugar */}
                    <div className='image-holder-mini rounded-4 overflow-hidden'>
                        <img src={Embalseyeso} className='w-100 rounded-4' />
                        <div class="text-overlay w-100 p-2">
                            <p class="mb-0">Embalse El Yeso</p>
                        </div>
                        <div class="badge-3 m-2">3°</div>
                    </div>
                </Col>
            </Row>
        </Wrapper>         
        </>
    )
}    
export default Home