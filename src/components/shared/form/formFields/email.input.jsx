import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

// components
import Input from "../input.component";

// util
import { regex } from "../form.util";

const EmailInput = ({ name, id, label, ...emailInputProps }) => {
  const { register, formState } = useFormContext();

  return (
    <>
      <Input
        name={name}
        type="email"
        id={id}
        label={label}
        register={register(name, {
          required: {
            value: true,
            message: "email is required",
          },
          pattern: {
            value: regex.email,
            message: "invalid email address",
          },
        })}
        formState={formState}
        {...emailInputProps}
      />
    </>
  );
};

export default EmailInput;

EmailInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
};

EmailInput.defaultProps = {
  name: "email",
  label: "Email Address",
};
