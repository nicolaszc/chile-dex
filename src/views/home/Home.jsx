import React from 'react'
/*import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css' */
import { Row, Col, Button } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';
import HomeGallery from '@/layouts/HomeGallery';

import iconoPatrimonio from '@/assets/img/building-columns-solid.svg'
import iconoRuta from '@/assets/img/route-solid.svg'
import Logo from '@/assets/img/logo_chiledex.svg'
import Grafico from '@/assets/img/grafico.png'
import Santalucia from '@/assets/img/santa-lucia.png'
import Moneda from '@/assets/img/palacio-moneda.png'
import Museomemoria from '@/assets/img/museo-memoria.png'


import './home.css'

function Home() {
    
    return (
        <>
        <Wrapper>
            <Row>
                <Col xs={{ span: 8, offset: 2 }} className='my-5'><img src={Logo} className='w-50 mx-auto' /></Col>
            </Row>
            <Row>
                <Col xs={6} className='d-flex'>
                    <Button variant='outline-secondary heritage' className='w-100 p-4 rounded-4 d-flex flex-column align-items-center justify-content-center'>
                       
                            <img src={iconoPatrimonio} className='w-25 mx-auto' />
                            <p className='pt-3 mb-0 fw-semibold'>Patrimonios visitados</p>
                                            
                    </Button>
                </Col>
                <Col xs={6} className='d-flex'>
                    <Button variant='primary routes' className='w-100 p-4 rounded-4 d-flex flex-column align-items-center justify-content-center'>
                        
                            <img src={iconoRuta} className='w-25 mx-auto' />
                            <p className='pt-3 mb-0 fw-semibold'>Planear visitas</p>
                                              
                    </Button>
                </Col>
            </Row> 
            <Row>
                <Col>
                    <div className='w-100 rounded-4 overflow-hidden my-5 chart'>
                        <img src={Grafico} className='w-100' />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='mb-3'>
                    <h3 className='text-start mb-3'>Patrimonios más visitados en Santiago</h3>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Santalucia} className='w-100 d-block' />
                    </div>
                </Col>
                <Col xs={6}>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Moneda} className='w-100' />
                    </div>
                </Col>
                <Col xs={6}>
                    <div className='image-holder rounded-4 overflow-hidden'>
                        <img src={Museomemoria} className='w-100' />
                    </div>
                </Col>
            </Row>
        </Wrapper>         
        </>
    )
}    
export default Home