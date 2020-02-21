import React from "react";
import PropTypes from "prop-types";

import { InputContainer, Input, TextArea, Label } from "./form-input.styles";

const FormInput = ({ label, type, name, onChange, value, textarea }) => (
  <InputContainer>
    <Label htmlFor={name}>{label}</Label>
    {textarea ? (
      <TextArea name={name} onChange={onChange} value={value} required />
    ) : (
      <Input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    )}
  </InputContainer>
);

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default FormInput;
