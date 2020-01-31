import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

import { AuthFormContainer, Form, Error } from "./auth-form.styles";

const AuthForm = ({ children, onSubmit, title, subText, btnText, error }) => (
  <AuthFormContainer>
    <h2>{title}</h2>
    <p>{subText}</p>
    <Error>{error}</Error>
    <Form onSubmit={onSubmit}>
      {children}
      <CustomButton type="submit">{btnText}</CustomButton>
    </Form>
  </AuthFormContainer>
);

export default AuthForm;
