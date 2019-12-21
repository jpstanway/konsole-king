import React from "react";

import {
  AuthFormContainer,
  Form,
  AuthFormInputContainer,
  AuthFormInput,
  AuthFormInputExtra
} from "./auth-form.styles";

import CustomButton from "../../components/custom-button/custom-button.component";

const AuthForm = ({ register, children }) => (
  <AuthFormContainer>
    <h2>{register ? "Create New Account" : "Sign In"}</h2>
    <p>{register ? "Create your own Konsole King account" : "Welcome back"}</p>
    <Form onSubmit={() => console.log("login")}>
      <AuthFormInputContainer>
        <label htmlFor="email">Email</label>
        <AuthFormInput type="email" name="email" />
      </AuthFormInputContainer>
      <AuthFormInputContainer>
        <label htmlFor="password">Password</label>
        <AuthFormInput type="password" name="password" />
      </AuthFormInputContainer>
      {register ? (
        <AuthFormInputContainer>
          <label htmlFor="password2">Confirm Password</label>
          <AuthFormInput type="password" name="password2" />
        </AuthFormInputContainer>
      ) : (
        <AuthFormInputExtra>
          <div>
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="#">Forgot Password?</a>
        </AuthFormInputExtra>
      )}
      <CustomButton type="submit">
        {register ? "Sign Up" : "Secure Sign In"}
      </CustomButton>
    </Form>
    {children}
  </AuthFormContainer>
);

export default AuthForm;
