import React from 'react';
import { Row, Col } from 'react-bootstrap'



function HomeGallery({ children }){
  return(
  <>
   
        <Row>
            <Col>
                <h3>{children}</h3>
                <div className='image-holder'>
                    {children}
                </div>
            </Col>
            <Col xs={6}>
                <div className='image-holder'>
                    {children}
                </div>
            </Col>
            <Col xs={6}>
                <div className='image-holder'>
                    {children}
                </div>
            </Col>
        </Row>
  
  </>
)
};

export default HomeGallery;