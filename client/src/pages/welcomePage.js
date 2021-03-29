import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapImage from '../images/map-image.jpg';
import '../responsiveCss/welcomePage.css';
function WelcomePage() {
    return (
        <Fragment>
            <div className='firstCenterDiv'>
                <div className='secondCenterDiv'>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className='pageTitle'>
                                    Welcome to Trips in your pocket
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={MapImage} alt='map' className='mapImage' />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Fragment>
    )
}

export default WelcomePage;