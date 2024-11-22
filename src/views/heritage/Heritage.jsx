import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';

function Heritage() {
    console.log('heritage')
    return (
        <>
        <Wrapper>
            <Row>
                <Col className='mt-5'>
                    <h1>Patrimonio</h1>
                </Col>                   
            </Row> 
        </Wrapper>  
        </>
    )
}
export default Heritage