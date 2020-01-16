import React from "react";

import { InputContainer, Input, TextArea, Label } from "./form-input.styles";

const FormInput = ({ label, type, name, onChange, textarea }) => (
  <InputContainer>
    <Label htmlFor={name}>{label}</Label>
    {textarea ? (
      <TextArea name={name} onChange={onChange} />
    ) : (
      <Input type={type} name={name} onChange={onChange} />
    )}
  </InputContainer>
);

export default FormInput;
