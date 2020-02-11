import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CheckoutPage } from "./checkout.styles";

import CheckoutForm from "../../components/checkout-form/checkout-form.component";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import CheckoutSummary from "../../components/checkout-summary/checkout-summary.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems, cartTotal }) => (
  <CheckoutPage>
    <CheckoutItems items={cartItems} />
    <div>&nbsp;</div>
    <CheckoutForm />
    <CheckoutSummary cartTotal={cartTotal} />
  </CheckoutPage>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
