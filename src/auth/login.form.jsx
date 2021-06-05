import React from "react";
import PropTypes from "prop-types";

// react hook form
import { useForm, FormProvider } from "react-hook-form";

// bootstrap
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

// shared components
import Button from "../components/shared/form/button.component";
import EmailInput from "../components/shared/form/formFields/email.input";
import PasswordInput from "../components/shared/form/formFields/password.input";

// form utils
import { defaultFormSettings } from "../components/shared/form/form.util";

const LoginForm = ({ handleLogin }) => {
  const methods = useForm({
    ...defaultFormSettings,
    defaultValues: {
      email: "dillon@testing.com",
      password: "testing",
    },
  });

  // react-hook-forms submit handler
  const { handleSubmit } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Form.Row>
            <Col md>
              <EmailInput
                id="login-form-email-input"
                label="Email Address"
                name="email"
                placeholder="example@example.com"
              />
            </Col>
            <Col md>
              <PasswordInput
                id="login-form-password-input"
                label="Password"
                name="password"
                placeholder="********"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Button type="submit" block>
                Login
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </FormProvider>
    </>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
