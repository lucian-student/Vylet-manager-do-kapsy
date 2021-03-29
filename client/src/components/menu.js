import React, { Fragment, useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../responsiveCss/menu.css';
function Menu() {
    const { currentUser, logout } = useContext(AuthContext);
    const pathname = window.location.pathname;
    return (
        <Container className='menuContainer'>
            <Row>
                <Col xs={12} md={8}>
                    {currentUser && (
                        <Nav variant="pills" defaultActiveKey={`${pathname}`} >
                            <Nav.Item >
                                <Nav.Link eventKey='/routes/main' as={Link} to='/routes/main'>
                                    Your trips
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    )}
                </Col>
                <Col xs={6} md={4}>
                    <Nav variant="pills" defaultActiveKey={`${pathname}`} style={{ float: 'right' }}>
                        {!currentUser ? (
                            <Fragment>
                                <Nav.Item >
                                    <Nav.Link eventKey='/routes/login' as={Link} to='/routes/login'>
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link eventKey='/routes/register' as={Link} to='/routes/register'>
                                        Register
                                    </Nav.Link>
                                </Nav.Item>
                            </Fragment>
                        ) : (
                            <Nav.Item >
                                <Button onClick={logout}>
                                    Logout
                                    </Button>
                            </Nav.Item>
                        )}
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu;