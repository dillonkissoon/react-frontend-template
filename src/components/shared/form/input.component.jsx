import React from "react";
import PropTypes from "prop-types";

// bootstrap
import { Form, InputGroup } from "react-bootstrap";

const Input = ({
  id,
  label,
  name,
  register,
  type,
  formState,
  ...inputProps
}) => {
  // grabbing values from react-hook-forms { formState } = useForm()
  const { errors, dirtyFields, isDirty } = formState;
  let error = errors[name];

  return (
    <>
      <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type={type}
            {...inputProps}
            {...register}
            isValid={!error && dirtyFields[name] && isDirty}
            isInvalid={!!error}
          />
          {error && (
            <Form.Control.Feedback type="invalid">
              {error.message}
            </Form.Control.Feedback>
          )}
        </InputGroup>
      </Form.Group>
    </>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formState: PropTypes.object.isRequired,
  register: PropTypes.object.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};
