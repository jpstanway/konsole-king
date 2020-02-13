import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Elements } from "react-stripe-elements";

import { CheckoutPage } from "./checkout.styles";

import CheckoutForm from "../../components/checkout-form/checkout-form.component";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import CheckoutSummary from "../../components/checkout-summary/checkout-summary.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const Checkout = ({ cartItems, cartTotal, currentUser }) => (
  <CheckoutPage>
    <CheckoutItems items={cartItems} />
    <div>&nbsp;</div>
    <Elements>
      <CheckoutForm currentUser={currentUser} cartTotal={cartTotal} />
    </Elements>
    <CheckoutSummary cartTotal={cartTotal} />
  </CheckoutPage>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Checkout);
