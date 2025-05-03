import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Container>
      <Link to="/" className="navbar-brand">
          <img 
            src={logo}  // Use imported logo
            alt="Pathak Study Hub Logo" 
            width="150"
            height="auto"
            className="d-inline-block align-top"
            style={{ cursor: "pointer" }}
          />
        </Link>
        {/* <Navbar.Brand href="/">Pathak Study Hub</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/admission">Admission</Nav.Link>
            <Nav.Link href="/notes">Notes</Nav.Link>
            <Nav.Link href="/notice">Notice</Nav.Link>
            <Nav.Link href="/idcard">ID Card</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
