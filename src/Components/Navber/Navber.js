import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className='container'>
          <Navbar.Brand href="#home">Apartment Rent</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            </Nav>
            <Nav>
              <Link to='/'>
                <Nav.Link href="/">Home</Nav.Link></Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Link to='/login'>
                <Nav.Link href="/blogs">Login</Nav.Link></Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navber;