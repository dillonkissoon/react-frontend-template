import React, { useEffect } from "react";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import LoginForm from "./login.form";
import DefaultAppShell from "./../layout/default.shell";

// login hook
import useLogin from "./login.hook";

const LoginPage = () => {
  const { loginUser } = useLogin();

  useEffect(() => {
    onLogin({ key: "123" });
  });

  // handler for login user
  const onLogin = async (data) => {
    try {
      const response = await loginUser(data);
      console.log(response);
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
