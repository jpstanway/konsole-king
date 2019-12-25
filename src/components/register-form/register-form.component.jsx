import React, { Component } from "react";

import {} from "./register-form.styles";

import AuthForm from "../auth-form/auth-form.component";
import FormInput from "../form-input/form-input.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirm_password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { email, password, confirm_password } = this.state;

    if (password !== confirm_password) {
      // error handling
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user);

      this.setState({
        email: "",
        password: "",
        confirm_password: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <AuthForm
        onSubmit={this.onSubmit}
        title="Create New Account"
        subText="Create your own Konsole King account"
        btnText="Sign Up"
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirm_password"
          onChange={this.handleChange}
        />
      </AuthForm>
    );
  }
}

export default RegisterForm;
