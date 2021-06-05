import React from "react";

// bootstrap
import { Button as ReactButton } from "react-bootstrap";

const Button = ({ children, ...buttonProps }) => {
  return (
    <>
      <ReactButton {...buttonProps}>{children}</ReactButton>
    </>
  );
};

export default Button;
