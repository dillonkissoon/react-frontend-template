import React from "react";

// bootstrap
import { Button as BootstrapButton } from "react-bootstrap";

const Button = ({ children, ...buttonProps }) => {
  return (
    <>
      <BootstrapButton {...buttonProps}>{children}</BootstrapButton>
    </>
  );
};

export default Button;
