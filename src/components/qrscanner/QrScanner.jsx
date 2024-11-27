import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';


function QrScanner() {

    const handleScan = (result) => {
        if (result?.[0]?.rawValue) {
          console.log(result[0].rawValue);
          window.open(result[0].rawValue, "_blank", "noreferrer");
        } else if (result?.rawValue) {
          console.log(result.rawValue);
          window.open(result.rawValue, "_blank", "noreferrer");
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