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
      email: "",
      password: "",
      remember: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      this.props.showNotification("Login successful!");
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <AuthForm
        onSubmit={this.onSubmit}
        title="Sign In"
        subText="Welcome back"
        btnText="Secure Sign In"
      >
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={this.handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={this.handleChange}
        />
        <LoginFormInputExtra>
          <div>
            <input
              type="checkbox"
              name="remember"
              onChange={this.handleChange}
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
  showNotification: PropTypes.func
};

export default connect(null, { showNotification })(LoginForm);
