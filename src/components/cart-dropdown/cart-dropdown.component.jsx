import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import { updateTotal } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, cartTotal, updateTotal }) => {
  useEffect(() => {
    updateTotal(cartItems);
  }, [cartItems, updateTotal]);

  return (
    <CartContainer>
      <CartIcon id="cart-btn" className="fas fa-shopping-cart fa-3x"></CartIcon>
      <span>Your Cart:</span>
      <CartTotal>${cartTotal / 100}</CartTotal>

      <Cart id="cart">
        {cartItems.length > 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <CartMessage>Cart is empty</CartMessage>
        )}
        <Link to="/cart">
          <CustomButton className="checkout">Checkout</CustomButton>
        </Link>
      </Cart>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps, { updateTotal })(CartDropdown);
