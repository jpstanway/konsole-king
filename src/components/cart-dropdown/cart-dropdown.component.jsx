import React from "react";

import { CartContainer, CartIcon, CartTotal } from "./cart-dropdown.styles";

const CartDropdown = () => (
  <CartContainer>
    <CartIcon className="fas fa-shopping-cart fa-3x"></CartIcon>
    <span>Your Cart:</span>
    <CartTotal>$0.00</CartTotal>
  </CartContainer>
);

export default CartDropdown;
