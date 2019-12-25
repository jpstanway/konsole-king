import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

import { AuthFormContainer, Form } from "./auth-form.styles";

const AuthForm = ({ children, onSubmit, title, subText, btnText }) => (
  <AuthFormContainer>
    <h2>{title}</h2>
    <p>{subText}</p>
    <Form onSubmit={onSubmit}>
      {children}
      <CustomButton type="submit">{btnText}</CustomButton>
    </Form>
  </AuthFormContainer>
);

export default AuthForm;
