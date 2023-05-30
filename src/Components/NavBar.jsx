import React from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ECommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Fashion</Nav.Link>
            <Nav.Link href="#pricing">Electronics</Nav.Link>
            <Button variant="outline-dark" className="me-2">
              <i className="fa fa-user-plus me-2"></i>Login
            </Button>
            <Button variant="outline-dark" className="me-2">
              <i className="fa fa-sign-in me-2"></i>Register
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
