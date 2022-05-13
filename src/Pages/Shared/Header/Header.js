import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" sticky='top' variant="dark">
        <Container>
        <Navbar.Brand as={Link}to="/"> 
            <div className='streetmaster'>
            <img src={logo} height="30px" alt="" />
            <p>BikeHunter </p>
            </div>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link}to="/">Home</Nav.Link>
          <Nav.Link Link as={Link} to="/blog">Blogs</Nav.Link>
          <Nav.Link Link as={Link} to="/login" >Login</Nav.Link>
        </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;