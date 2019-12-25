import React from "react";

import { InputContainer, Input } from "./form-input.styles";

const FormInput = ({ label, type, name }) => (
  <InputContainer>
    <label htmlFor={name}>{label}</label>
    <Input type={type} name={name} />
  </InputContainer>
);

export default FormInput;
