import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { GeoAltFill, HouseDoorFill, TicketFill } from 'react-bootstrap-icons';
import Wrapper from '@/layouts/Wrapper';

import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import './heritage.css'

import Barrioyungay from '@/assets/img/barrio-yungay.png'
import Zonatipica from '@/assets/img/zona-tipica-logo.svg'

function Yungay() {
    const navigate = useNavigate()
    function handleMarkerClick(page){
        navigate(page)
      }
    return (
        <>
<span className='position-absolute start-0 top-0 ms-2 mt-2 z-3'><ArrowLeftCircle size='24' color='#666' onClick={(e)=>handleMarkerClick('/heritage')}/></span>
        <Wrapper className="mt-5">
            <Row className="mb-4 titulo-ficha">
                <h1 className="fw-bold">Barrio Yungay</h1>
            </Row>

            <Row className="justify-content-center mb-5">
                <Col xs={12} md={10}>
                    <div>
                        <img src={Barrioyungay} className='w-100 rounded-4 shadow-sm'/>
                    </div>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <GeoAltFill className="text-danger me-3" size={40} />
                    <p>Comuna de Santiago</p>
                </Col>

                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <img src={Zonatipica} className="text-danger me-3" size={30} />
                    <p>Zona típica</p>
                </Col>

                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <TicketFill className="text-warning me-3" size={40} />
                    <p>Acceso liberado</p>
                </Col>
            </Row>

            <Row className='align-items-start info-patrimonial'>
                <p className="mb-4">
                El Barrio Yungay es el barrio patrimonial más grande de Santiago, reconocido por su riqueza cultural y arquitectónica de los siglos XIX y XX.
                </p>
                <p className='mb-4'>
                Fundado en honor a la Batalla de Yungay de 1839, se destaca por su arquitectura que combina residencias aristocráticas con cités y conventillos populares. Históricamente, fue hogar de destacados intelectuales como Domingo Faustino Sarmiento y los hermanos Parra.
                </p>
                <p className="mb-4">
                El barrio alberga importantes centros culturales y museos, como el Museo Nacional de Historia Natural y el Museo de la Memoria. Su vida comunitaria sigue activa, con calles llenas de historia, gastronomía típica y una comunidad comprometida en preservar su patrimonio.
                </p>
                <p className='mb-4'>
                Fue declarado Zona Típica en 2009, Yungay es un consolidado circuito cultural de Santiago.
                </p>
            </Row>  
        </Wrapper> 
        </>
    )
}
export default Yungay