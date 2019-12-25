import React from "react";

import { LoginFormInputExtra } from "./login-form.styles";

import AuthForm from "../auth-form/auth-form.component";
import FormInput from "../form-input/form-input.component";

const LoginForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      title="Sign In"
      subText="Welcome back"
      btnText="Secure Sign In"
    >
      <FormInput label="Email" type="email" name="email" />
      <FormInput label="Password" type="password" name="password" />
      <LoginFormInputExtra>
        <div>
          <input type="checkbox" name="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <a href="/">Forgot Password?</a>
      </LoginFormInputExtra>
    </AuthForm>
  );
};

export default LoginForm;
