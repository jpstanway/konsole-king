import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { LoginFormInputExtra } from "./login-form.styles";

import AuthForm from "../auth-form/auth-form.component";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { showNotification } from "../../redux/notification/notification.actions";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      loginEmail: "test@test.com",
      loginPassword: "123456",
      remember: false,
      loginError: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const { loginEmail, loginPassword } = this.state;

    try {
      await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
      this.setState({ loginEmail: "", loginPassword: "" });
      this.props.showNotification("Login successful!");
    } catch (error) {
      this.setState({ loginError: error.message });
    }
  };

  render() {
    const { loginEmail, loginPassword, remember, loginError } = this.state;

    return (
      <AuthForm
        onSubmit={this.onSubmit}
        title="Sign In"
        subText="Welcome back"
        btnText="Secure Sign In"
        btnId="loginSubmit"
        error={loginError}
      >
        <FormInput
          label="Email"
          type="email"
          name="loginEmail"
          onChange={this.handleChange}
          value={loginEmail}
        />
        <FormInput
          label="Password"
          type="password"
          name="loginPassword"
          onChange={this.handleChange}
          value={loginPassword}
        />
        <LoginFormInputExtra>
          <div>
            <input
              type="checkbox"
              name="remember"
              onChange={this.handleChange}
              value={remember}
            />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="/">Forgot Password?</a>
        </LoginFormInputExtra>
        <CustomButton onClick={signInWithGoogle} googleSignIn>
          Sign In With Google
        </CustomButton>
      </AuthForm>
    );
  }
}

LoginForm.propTypes = {
  showNotification: PropTypes.func,
};

export default connect(null, { showNotification })(LoginForm);
