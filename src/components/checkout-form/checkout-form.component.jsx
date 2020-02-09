import React, { Component } from "react";

import { CheckoutFormExtra } from "./checkout-form.styles";

import AuthForm from "../auth-form/auth-form.component";
import FormInput from "../form-input/form-input.component";

class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      city: "",
      province: "",
      postalCode: "",
      phoneNumber: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <AuthForm
        onSubmit={this.onSubmit}
        title="Checkout"
        subText="Address & Payment"
        btnText="Submit Payment"
      >
        <FormInput
          label="Street Address"
          type="text"
          name="address"
          onChange={this.handleChange}
        />
        <FormInput
          label="City"
          type="text"
          name="city"
          onChange={this.handleChange}
        />
        <FormInput
          label="Province"
          type="text"
          name="province"
          onChange={this.handleChange}
        />
        <FormInput
          label="Postal Code"
          type="text"
          name="postalCode"
          onChange={this.handleChange}
        />
        <FormInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          onChange={this.handleChange}
        />
        <CheckoutFormExtra>
          <div>
            <input
              type="checkbox"
              name="billing"
              onChange={this.handleChange}
              checked
            />
            <label htmlFor="billing">Billing same as shipping</label>
          </div>
        </CheckoutFormExtra>
      </AuthForm>
    );
  }
}

export default CheckoutForm;
