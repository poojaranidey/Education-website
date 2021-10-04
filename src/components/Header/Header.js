import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Shikhsha</Navbar.Brand>
                    <Nav >
                        <Nav.Link className="navlink" href="/home">Home</Nav.Link>
                        <Nav.Link className="navlink" href="/trainers">Trainers</Nav.Link>
                        <Nav.Link className="navlink" href="/services">Services</Nav.Link>
                        <Nav.Link className="navlink" href="/about">About</Nav.Link>
                        <Nav.Link className="navlink" href="/contactus">Contact-us</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;