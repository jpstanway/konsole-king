import React from "react";

import {} from "./register-form.styles";

import AuthForm from "../auth-form/auth-form.component";
import FormInput from "../form-input/form-input.component";

const RegisterForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log("register");
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      title="Create New Account"
      subText="Create your own Konsole King account"
      btnText="Sign Up"
    >
      <FormInput label="Email" type="email" name="email" />
      <FormInput label="Password" type="password" name="password" />
      <FormInput label="Confirm Password" type="password" name="password2" />
    </AuthForm>
  );
};

export default RegisterForm;
