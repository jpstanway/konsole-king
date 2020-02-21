import React, { Component } from "react";
import { connect } from "react-redux";

import AuthForm from "../auth-form/auth-form.component";
import FormInput from "../form-input/form-input.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { showNotification } from "../../redux/notification/notification.actions";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      error: ""
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
      this.setState({ error: "Passwords don't match." });
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

      this.props.showNotification("Registration success. Welcome!");
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <AuthForm
        onSubmit={this.onSubmit}
        title="Create New Account"
        subText="Create your own Konsole King account"
        btnText="Sign Up"
        error={this.state.error}
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

export default connect(null, { showNotification })(RegisterForm);
