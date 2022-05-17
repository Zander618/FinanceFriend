import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand component={ Link } to="/Home" href="Home">Finance Friend</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link component={ Link } to="/MoneyTracker" href="/MoneyTracker">Money Tracker</Nav.Link>
            <Nav.Link component={ Link } to="/Assets" href="/Assets">Assets</Nav.Link>
            <Nav.Link component={ Link } to="/Expenses" href="/Expenses">Expenses</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link component={ Link } to="/SignIn" href="/SignIn">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
