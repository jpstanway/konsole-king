import React from "react";

import { RegisterLoginPage, AuthFormList } from "./register-login.styles";

import LoginForm from "../../components/login-form/login-form.component";
import RegisterForm from "../../components/register-form/register-form.component";

const RegisterLogin = () => (
  <RegisterLoginPage>
    <LoginForm />
    <RegisterForm />
    <div>&nbsp;</div>
    <AuthFormList>
      <h2>Sign Up Today So You Can:</h2>
      <ul>
        <li>
          <i className="fas fa-check"></i> Speed your way through checkout
        </li>
        <li>
          <i className="fas fa-check"></i> Track your orders easily
        </li>
        <li>
          <i className="fas fa-check"></i> Keep a record of your purchases
        </li>
      </ul>
    </AuthFormList>
  </RegisterLoginPage>
);

export default RegisterLogin;
