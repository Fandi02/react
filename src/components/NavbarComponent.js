import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ListHandphones from "./ListHandphones";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <strong>Hp Spec</strong>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" component={ListHandphones} />
          <Route path="/about" component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavbarComponent;
