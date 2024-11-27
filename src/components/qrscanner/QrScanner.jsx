import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';


function QrScanner() {
    
    const handleScan = (result) => {
        let newTab = window.open()
        if (result?.[0]?.rawValue) {
          console.log(result[0].rawValue);
          window.location.href=result[0].rawValue;
        } else if (result?.rawValue) {
          console.log(result.rawValue);
          window.location.href=result.rawValue;
        } else {
          console.log("No data found");
        }
      }
    return (
        <>
            <Wrapper>
                <Row>
                    <Col className='mt-5'>
                        <Scanner onScan={(result) => handleScan(result)} />
                    </Col>                   
                </Row>   
            </Wrapper> 
        </>
    )

}
export default QrScanner