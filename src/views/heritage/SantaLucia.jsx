import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { GeoAltFill, HouseDoorFill, TelephoneFill, TicketFill, ArrowLeftCircle } from 'react-bootstrap-icons';
import Wrapper from '@/layouts/Wrapper';

import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import './heritage.css'

import Stalucia from '@/assets/img/cerro-sta-lucia-ficha.png'

function SantaLucia() {
    const navigate = useNavigate()
    function handleMarkerClick(page){
        navigate(page)
      }
    return (
<>
<span className='position-absolute start-0 top-0 ms-2 mt-2 z-3'><ArrowLeftCircle size='24' color='#666' onClick={(e)=>handleMarkerClick('/heritage')}/></span>
        <Wrapper className="mt-5">
            <Row className="mb-4 titulo-ficha">
                <h1 className="fw-bold">Cerro Santa Lucía</h1>
            </Row>

            <Row className="justify-content-center mb-5">
                <Col xs={12} md={10}>
                    <div>
                        <img src={Stalucia} className='w-100 rounded-4 shadow-sm'/>
                    </div>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <GeoAltFill className="text-danger me-3" size={70} />
                    <p>Cuadrante delimitado por Avenida Libertador Bernardo O'Higgins, Santa Lucía, Victoria Subercaseaux y Merced</p>
                </Col>

                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <HouseDoorFill className="text-danger me-3" size={30} />
                    <p>Monumento histórico</p>
                </Col>

                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <TelephoneFill className="text-dark me-3" size={30} />
                    <p>+56 9 5417 4843</p>
                </Col>

                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <TicketFill className="text-warning me-3" size={30} />
                    <p>Acceso liberado</p>
                </Col>
            </Row>

            <Row className='align-items-start info-patrimonial'>
                <p className="mb-4">
                El Cerro Santa Lucía, uno de los parques más emblemáticos de Santiago, es un testigo histórico del desarrollo de la ciudad desde la llegada de los conquistadores españoles en 1540.
                </p>
                <p className="mb-4">
                Anteriormente conocido como Huelén, este cerro fue transformado en 1872 por Benjamín Vicuña Mackenna en un paseo público con influencias europeas.
                </p>
                <p className="mb-4">
                Hoy, alberga atractivos como el Castillo Hidalgo y las terrazas Neptuno y Caupolicán, que lo convierten en un punto de interés turístico destacado tanto para locales como para extranjeros.
                </p>
            </Row>

            <Row className='horarios-container'>
                <h3 className="horarios-titulo">Horario</h3>
                <div className="horario-detalle">
                    <p><strong>Verano:</strong> Lun - Dom de 08:00 a las 20:00 horas</p>
                    <p><strong>Invierno:</strong> Lun - Dom de 08:00 a las 19:00 horas</p>
                </div>
                <p className="horario-aviso"><strong>CERRADO EN DÍAS DE LLUVIA</strong></p>
            </Row>

            <Row className='justify-content-center my-4'>
            <Col xs={12} md={8} lg={6} className='d-flex justify-content-center'>
                    <NavLink to='https://www.patrimoniocultural.gob.cl/multimedia/cerro-santa-lucia' target='_blank' className=' btn btn-outline-primary visit-plan w-100 p-4 rounded-pill'>
                            <p className=' mb-0 fw-semibold'>Patrimonio virtual</p>                     
                    </NavLink>
                </Col>
            </Row>
            
        </Wrapper> 
        </>
    )
}
export default SantaLucia