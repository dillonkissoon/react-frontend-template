import React from "react";
import { useHistory, useLocation } from "react-router-dom";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import LoginForm from "./login.form";
import DefaultAppShell from "./../layout/default.shell";

// login hook
import { useAuth } from "./login.hook";

const LoginPage = () => {
  const { loginUser } = useAuth();
  let history = useHistory();
  let location = useLocation();

  // handler for login user
  const onLogin = async (data) => {
    try {
      const response = await loginUser(data);
      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <DefaultAppShell>
        <Container>
          <Row>
            <Col md="5">
              <h1>Login Page</h1>
              <p>Some content about login</p>
            </Col>
            <Col md="7">
              <h3>Login Form</h3>
              <LoginForm handleLogin={onLogin} />
            </Col>
          </Row>
        </Container>
      </DefaultAppShell>
    </>
  );
};

export default LoginPage;
