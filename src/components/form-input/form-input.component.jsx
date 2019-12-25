import React from "react";

import { InputContainer, Input } from "./form-input.styles";

const FormInput = ({ label, type, name, onChange }) => (
  <InputContainer>
    <label htmlFor={name}>{label}</label>
    <Input type={type} name={name} onChange={onChange} />
  </InputContainer>
);

export default FormInput;
