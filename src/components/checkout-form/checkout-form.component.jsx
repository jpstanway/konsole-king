import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { injectStripe } from "react-stripe-elements";
import axios from "axios";

import { CheckoutFormElement, CheckoutFormExtra } from "./checkout-form.styles";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import StripeInput from "../stripe-input/stripe-input.component";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "123 4th Ave",
      city: "Somewhereville",
      province: "Ontario",
      postalCode: "H7V 8T1",
      phoneNumber: "555-555-5555",
      billing: true
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { currentUser, cartTotal } = this.props;

    const response = await axios.get(`/secret/${cartTotal}`);
    const { client_secret: clientSecret } = response.data;

    const payment = await this.props.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.props.elements.getElement("card"),
        billing_details: {
          email: currentUser.email
        }
      }
    });

    if (payment.paymentIntent.status === "succeeded") {
      // create order object and save to firebase

      // redirect to user's order history or homepage
      this.props.history.push("/");
    } else {
      console.log("Error processing payment");
    }
  };

  render() {
    const { address, city, province, postalCode, phoneNumber } = this.state;

    return (
      <CheckoutFormElement onSubmit={this.onSubmit} id="payment-form">
        <FormInput
          label="Street Address"
          type="text"
          name="address"
          value={address}
          onChange={this.handleChange}
        />
        <FormInput
          label="City"
          type="text"
          name="city"
          value={city}
          onChange={this.handleChange}
        />
        <FormInput
          label="Province"
          type="text"
          name="province"
          value={province}
          onChange={this.handleChange}
        />
        <FormInput
          label="Postal Code"
          type="text"
          name="postalCode"
          value={postalCode}
          onChange={this.handleChange}
        />
        <FormInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          value={phoneNumber}
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
        <StripeInput />
        <CustomButton type="submit">Submit Payment</CustomButton>
      </CheckoutFormElement>
    );
  }
}

export default withRouter(injectStripe(CheckoutForm));
