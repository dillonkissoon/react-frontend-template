import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

// components
import Input from "../input.component";

const PasswordInput = ({ name, id, label, ...passwordInputProps }) => {
  const { register, formState } = useFormContext();

  return (
    <>
      <Input
        name={name}
        type="password"
        id={id}
        label={label}
        register={register(name, {
          validate: (value) => value === "testing" || "invalid password",
        })}
        formState={formState}
        {...passwordInputProps}
      />
    </>
  );
};

export default PasswordInput;

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
};

PasswordInput.defaultProps = {
  name: "password",
  label: "Password",
};
