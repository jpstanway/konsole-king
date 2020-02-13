import React from "react";
import { CardElement } from "react-stripe-elements";

import "./stripe-input.styles.css";

const style = {
  base: {
    color: "#32325d",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

const StripeInput = () => {
  return (
    <label>
      Card details{" "}
      <span className="test-card">4242 4242 4242 4242 | 01/29 | 123</span>
      <CardElement
        className="MyCardElement"
        style={style}
        hidePostalCode={true}
      />
    </label>
  );
};

export default StripeInput;
