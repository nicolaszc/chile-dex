import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
/*import { NavLink, useNavigate } from 'react-router-dom';*/
import { ArrowLeft } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import Wrapper from '@/layouts/Wrapper';

import './agenda.css'


function Agenda() {

    const [region, setRegion] = useState("Seleccionar región");
    const [comuna, setComuna] = useState("Seleccionar comuna");
    const [comunas, setComunas] = useState([]);

    const  regionesComunas = {
        "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
        "Tarapacá":["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
        "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
        "Atacama":["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Huasco", "Freirina", "Alto del Carmen"],
        "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
        "Valparaíso":["Valparaíso", "Viña del Mar", "Concón", "Quintero", "Puchuncaví", "Casablanca", "Juan Fernández", "San Antonio", "Cartagena", "El Quisco", "El Tabo", "Algarrobo", "Santo Domingo", "Quilpué", "Villa Alemana", "Limache", "Olmué", "San Felipe", "Llay-Llay", "Catemu", "Panquehue", "Putaendo", "Santa María", "Los Andes", "Calle Larga", "Rinconada", "San Esteban"],
        "Metropolitana de Santiago": ["Santiago", "Providencia", "Ñuñoa", "Las Condes", "La Reina", "Vitacura", "Peñalolén", "Macul", "La Florida", "Puente Alto", "San Bernardo", "Maipú", "Pudahuel", "Quilicura", "Renca", "Recoleta", "Independencia", "Conchalí", "Huechuraba", "Lo Barnechea", "Cerro Navia", "Quinta Normal", "Lo Prado", "Estación Central", "Pedro Aguirre Cerda", "San Miguel", "San Joaquín", "La Granja", "La Pintana", "El Bosque", "Lo Espejo", "Cerrillos", "Peñaflor", "Talagante", "Isla de Maipo", "Melipilla", "Curacaví"],
        "O'Higgins":["Rancagua", "Machalí", "Graneros", "San Francisco de Mostazal", "Codegua", "Rengo", "Malloa", "San Vicente de Tagua Tagua", "Pichidegua", "Las Cabras", "Peumo", "Coltauco", "Doñihue", "Quinta de Tilcoco", "San Fernando", "Chimbarongo", "Placilla", "Nancagua", "Santa Cruz", "Lolol", "Pumanque", "Chépica", "Palmilla", "Peralillo", "Paredones", "Marchihue", "La Estrella", "Litueche", "Navidad"],
        "Maule": ["Talca", "San Clemente", "Pencahue", "Curepto", "Maule", "Pelarco", "Río Claro", "Constitución", "Empedrado", "Linares", "Colbún", "San Javier", "Villa Alegre", "Yerbas Buenas", "Parral", "Retiro", "Cauquenes", "Pelluhue", "Chanco", "Curicó", "Romeral", "Molina", "Sagrada Familia", "Hualañé", "Licantén", "Vichuquén", "Teno"],
        "Ñuble":["Chillán", "Chillán Viejo", "Bulnes", "Quillón", "San Ignacio", "El Carmen", "Pemuco", "Yungay", "Coihueco", "San Carlos", "San Nicolás", "Ñiquén", "Portezuelo", "Coelemu", "Ránquil", "Trehuaco", "Quirihue", "Cobquecura", "Ninhue"],
        "Biobío": ["Concepción", "Talcahuano", "Hualpén", "Chiguayante", "San Pedro de la Paz", "Penco", "Tomé", "Lota", "Coronel", "Santa Juana", "Hualqui", "Florida", "Cabrero", "Yumbel", "Los Ángeles", "Mulchén", "Nacimiento", "Negrete", "Laja", "San Rosendo", "Tucapel", "Antuco", "Alto Biobío", "Arauco", "Lebu", "Curanilahue", "Los Álamos", "Cañete", "Tirúa"],
        "La Araucanía":["Temuco", "Padre Las Casas", "Lautaro", "Vilcún", "Perquenco", "Galvarino", "Cholchol", "Carahue", "Nueva Imperial", "Teodoro Schmidt", "Toltén", "Pitrufquén", "Gorbea", "Loncoche", "Villarrica", "Pucón", "Curarrehue", "Angol", "Renaico", "Collipulli", "Ercilla", "Los Sauces", "Purén", "Traiguén", "Lumaco"],
        "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
        "Los Lagos":["Puerto Montt", "Calbuco", "Maullín", "Los Muermos", "Puerto Varas", "Llanquihue", "Frutillar", "Castro", "Ancud", "Quellón", "Dalcahue", "Quinchao", "Puqueldón", "Queilen", "Chaitén", "Palena", "Futaleufú"],
        "Aysén": ["Coyhaique", "Puerto Aysén", "Puerto Cisnes", "Cochrane", "Chile Chico", "Tortel"],
        "Magallanes y La Antártica Chilena":["Punta Arenas", "Puerto Natales", "Porvenir", "Primavera", "Timaukel", "Torres del Paine", "Cabo de Hornos"],
    }

    // Funciones para manejar la selección
    const handleRegionSelect = (selectedRegion) => {
        setRegion(selectedRegion);
        setComunas(regionesComunas[selectedRegion] || []);
        setComuna("Seleccionar comuna");
    };

    const handleComunaSelect = (selectedComuna) => {
        setComuna(selectedComuna);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const [selectedHour, setSelectedHour]= useState(null);
    const handleHoraClick = (hora)  => {
        setSelectedHour(hora);
    }

    const hours = {
        mañana: ['08:00', '09:00', '10:00', '11:00'],
        tarde: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
        noche: ['19:00', '20:00', '21:00', '22:00'],
    };

    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (index) => {
        setSelectedButton(index); // Actualiza el estado con el botón seleccionado
    };
    
    return (

        <Wrapper>
            <Row className='header justify-content-between'>
                <h2 className='text-start mt-4'><ArrowLeft className='me-3'/>Planificar visita</h2>
            </Row>

            {/* Dropdown de regiones */}

            <Row className='mt-4 ubicacion'>
                <p className='region'>¿A dónde quieres ir?</p>
                <Dropdown onSelect={handleRegionSelect} className='custom-dropdown'>
                    <Dropdown.Toggle id="dropdown-region">{region}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {Object.keys(regionesComunas).map((regionName) => (
                        <Dropdown.Item eventKey={regionName} key={regionName}>{regionName}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>                  
            </Row>

            {/* Dropdown de comunas */}

            <Row className='mt-4 ubicacion'>
                <Dropdown onSelect={handleComunaSelect} className='custom-dropdown'>
                    <Dropdown.Toggle id="dropdown-comunas">{comuna}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {comunas.length > 0 ? (
                                comunas.map((comunaName) => (
                                    <Dropdown.Item eventKey={comunaName} key={comunaName}>
                                        {comunaName}
                                    </Dropdown.Item>
                                ))
                            ) : (
                                <Dropdown.Item disabled>Selecciona una región primero</Dropdown.Item>
                            )}
                    </Dropdown.Menu>
                </Dropdown>                
            </Row>
            <Row className='mt-5 date'>
                <p className='calendar'>¿Cuándo quieres ir?</p>
            </Row>
            <Row className='datepicker'>
                <Col>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}  // Actualiza la fecha seleccionada
                        dateFormat="dd/MM/yyyy"  // Formato de fecha
                        placeholderText="Elige una fecha"
                        className="custom-datepicker"/>
                </Col>
            </Row>
            <Row className='mt-5 horario'>
                <p>¿A que hora quieres ir?</p>
            </Row>
            <Row className='horas'>
                {Object.entries(hours).map(([etapa, horas]) => (
                    <Col key={etapa} className='etapa'>
                        <h4 className='etapa-título'>{etapa.charAt(0).toUpperCase() + etapa.slice(1)}</h4>
                        <Col className='hours'>
                            {horas.map((hora) => (
                                <Button key={hora}
                                className={`hora-button ${selectedHour === hora ? 'selected' : ''}`}
                                onClick={() => handleHoraClick(hora)}> {hora} </Button>
                            ))}
                        </Col>
                    </Col>
                ))}
            </Row>
            <Row className='mt-5 toolbar-cantidad'>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="button-group" aria-label="First group">
                    {[1, 2, 3, 4, 5].map((num, index) =>(
                        <Button key={index} variant={selectedButton === index ? 'primary' : 'outline-primary'} onClick={() => handleButtonClick(index)}>{num}</Button>
                    ))}
                </ButtonGroup>
            </ButtonToolbar>
            </Row>
            <Row className='next-button mt-5'>
                <Button className='rounded-pill' variant="info">Siguiente</Button>
            </Row>
        </Wrapper>   
    )
}
export default Agenda