import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/trainers">Trainers</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contactus">Contact-us</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;