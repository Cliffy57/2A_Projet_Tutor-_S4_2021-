import React from 'react';
import logo from './images/logo_dix-cover.png';
import {Nav, Container, NavDropdown} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <Container>
                <Navbar className="navbar" fixed="bottom" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Collapse>
                            <Nav className="m-auto">
                                <Navbar.Brand>
                                    <img src={logo} width="40px" height="40px" style={{borderRadius : "50%", border : "2px solid white"}} />
                                </Navbar.Brand>
                                <Nav.Link ><Link to="./home" className="LinkNav">Home</Link></Nav.Link>
                                <Nav.Link ><Link to="./about" className="LinkNav">About</Link></Nav.Link>
                                <Nav.Link ><Link to="./map" className="LinkNav">Map</Link></Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}