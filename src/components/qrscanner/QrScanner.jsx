import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';
import './qrscanner.css'

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
                    <Col className='mt-4 qr-scanner'>
                        <div className='rounded-4 qr-container mb-5'><Scanner onScan={(result) => handleScan(result)} classNames="custom-scanner" /></div>
                        <h3>Escanea el código QR de la señalética</h3>
                        <p>En un punto del lugar hay un código QR el cual te permitirá desbloquear la información del patrimonio en el que te encuentres.</p>
                        <p>Además, se agregará a tu colección de patrimonios visitados para que así puedas acceder a su información cuando quieras.</p>
                    </Col>                   
                </Row>   
            </Wrapper> 
        </>
    )

}
export default QrScanner