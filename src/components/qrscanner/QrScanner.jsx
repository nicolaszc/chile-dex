import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';


function QrScanner() {

    return (
        <>
            <Wrapper>
                <Row>
                    <Col className='mt-5'>
                        <Scanner onScan={(result) => console.log(result)} viewFinderBorder={18}
          containerStyle={{ borderRadius: 16 }}/>
                    </Col>                   
                </Row>   
            </Wrapper> 
        </>
    )

}
export default QrScanner