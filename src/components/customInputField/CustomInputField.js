import React from "react";
import { Form } from "react-bootstrap";

const CustomInputField = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};

export default CustomInputField;
