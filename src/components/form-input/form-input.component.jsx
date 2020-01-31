import React from "react";

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

export default FormInput;
