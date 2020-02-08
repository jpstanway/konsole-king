import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CartContainer,
  CartIcon,
  CartTotal,
  Cart,
  CartMessage
} from "./cart-dropdown.styles";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cart }) => {
  let cartTotal;
  if (cart.length > 0) {
    cartTotal = cart.reduce(
      (acc, curr) => (acc += Number(curr.price) * curr.quantity),
      0
    );
  }

  return (
    <CartContainer>
      <CartIcon id="cart-btn" className="fas fa-shopping-cart fa-3x"></CartIcon>
      <span>Your Cart:</span>
      <CartTotal>${cartTotal ? cartTotal / 100 : "0.00"}</CartTotal>

      <Cart id="cart">
        {cart.length > 0 ? (
          cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <CartMessage>Cart is empty</CartMessage>
        )}
        <CustomButton className="checkout">Checkout</CustomButton>
      </Cart>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
