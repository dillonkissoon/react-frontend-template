import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

// bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// hooks
import { useAuth } from "../auth/login.hook";

const DefaultNavigation = () => {
  const { logoutUser, isUserAuthed } = useAuth();
  let history = useHistory();

  const logout = async () => {
    await logoutUser();
    history.push("/");
  };

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
              {!isUserAuthed && (
                <LinkContainer to="/login">
                  <Nav.Item as={Nav.Link}>Login</Nav.Item>
                </LinkContainer>
              )}

              {isUserAuthed && (
                <Nav.Item as={Nav.Link} onClick={logout}>
                  Logout
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default DefaultNavigation;
