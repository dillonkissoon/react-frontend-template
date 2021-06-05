import React from "react";
import { LinkContainer } from "react-router-bootstrap";

// bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const DefaultNavigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Demo Project</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <LinkContainer to="/account">
                <Nav.Item as={Nav.Link}>Account</Nav.Item>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Item as={Nav.Link}>Login</Nav.Item>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default DefaultNavigation;
