import React from "react";

import { RegisterLoginPage, AuthFormList } from "./register-login.styles";

import AuthForm from "../../components/auth-form/auth-form.component";

const RegisterLogin = () => (
  <RegisterLoginPage>
    <AuthForm />
    <AuthForm register>
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
    </AuthForm>
  </RegisterLoginPage>
);

export default RegisterLogin;
