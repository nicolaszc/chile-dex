import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { GeoAltFill, HouseDoorFill, TelephoneFill, TicketFill, ArrowLeftCircle } from 'react-bootstrap-icons';
import Wrapper from '@/layouts/Wrapper';

import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import './heritage.css'

import Mapocho from '@/assets/img/centro-cultural-mapocho.png'

function EstacionMapocho() {
    const navigate = useNavigate()
    function handleMarkerClick(page){
        navigate(page)
      }
    return (
        <>
       <span className='position-absolute start-0 top-0 ms-2 mt-2 z-3'><ArrowLeftCircle size='24' color='#666' onClick={(e)=>handleMarkerClick('/heritage')}/></span>
        <Wrapper className="mt-5">

            <Row className="mb-4 titulo-ficha">
                <h1 className="fw-bold">Centro Cultural Estación Mapocho</h1>
            </Row>

            <Row className="justify-content-center mb-5">
                <Col xs={12} md={10}>
                    <div>
                        <img src={Mapocho} className='w-100 rounded-4 shadow-sm'/>
                    </div>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <GeoAltFill className="text-danger me-3" size={70} />
                    <p>Plaza de la Cultura, ex Estación de Trenes.Estación Puente Cal y Canto, Línea 2 del Metro de Santiago.</p>
                </Col>

                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <HouseDoorFill className="text-danger me-3" size={30} />
                    <p>Museo</p>
                </Col>

                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <TelephoneFill className="text-dark me-3" size={30} />
                    <p>+56 2 2787 0000 / prensa@estacionmapocho.cl</p>
                </Col>

                <Col xs={12} className="d-flex align-items-start mb-4 info-patrimonial">
                    <TicketFill className="text-warning me-3" size={30} />
                    <p>Acceso sujeto a evento</p>
                </Col>
            </Row>

            <Row className='align-items-start info-patrimonial'>
                <p className="mb-4">
                El Centro Cultural Estación Mapocho se encuentra emplazado en uno de los monumentos históricos más hermosos y significativos de la ciudad de Santiago: la ex estación de trenes. Diseñado por el arquitecto chileno Emilio Jecquier, este edificio de arquitectura neoclásica fue construido en 1910 en un gesto de modernidad para un país que avanzaba hacia un mayor desarrollo, en el marco de la celebración del Centenario de la independencia de Chile.                </p>
                <p className="mb-4">
                En 1987 la Estación Mapocho dejó de funcionar como terminal ferroviario. A principio de los años noventa, con el retorno de la democracia al país, el gobierno de Chile concreta uno de los gestos más significativos para la infraestructura y revitalización cultural del país: la creación del Centro Cultural Estación Mapocho a partir de la remodelación de la entonces abandonada estación de trenes. Con una inversión estatal inédita desde el centenario, el edificio vuelve al imaginario de los chilenos transformado en el primer espacio destinado a acoger las más diversas expresiones artísticas y actividades culturales, nacionales e internacionales, acogiendo a más de un millón de visitas al año.                </p>
                <p className="mb-4">
                En 2005, la Municipalidad de Santiago distinguió al centro cultural con el sello “Patrimonio de la Ciudad”. Mediante su gestión ágil, autónoma y autofinanciada este espacio ha sido puesto a disposición para satisfacer las necesidades culturales que requiere un público transversal y diverso, labor que en 2009 fue reconocida con el Premio Internacional Reina Sofía de Gestión y Preservación del Patrimonio.
                </p>
                <p className="mb-4">
                El Centro Cultural cuenta con 33 espacios 33 disponibles para acoger actividades de gran público, artes escénicas y artes visuales.
                </p>
            </Row>

            <Row className='horarios-container'>
                <h3 className="horarios-titulo">Horario</h3>
                <div className="horario-detalle">
                    <p><strong>Lun - Dom:</strong> 10:00 a las 18:00 horas</p>
                </div>
            </Row>
            
        </Wrapper> 
        </>
    )
}
export default EstacionMapocho