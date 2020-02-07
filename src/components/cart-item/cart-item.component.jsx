import React from "react";
import { connect } from "react-redux";

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemTitle,
  CartItemPrice,
  CartItemRemove
} from "./cart-item.styles";

import { removeItem } from "../../redux/cart/cart.actions";

const cartItem = ({ item, removeItem }) => {
  const totalItemPrice = item.price * item.quantity;

  return (
    <CartItemContainer>
      <CartItemImage src={item.imageUrl} alt="cart item" />
      <CartItemInfo>
        <CartItemTitle to={`/browse/${item.category}/${item.id}`}>
          {item.item.length > 13
            ? `${item.item.substring(0, 10)}...`
            : item.item}
        </CartItemTitle>
        <p>Qty: {item.quantity}</p>
        <CartItemPrice>${totalItemPrice / 100}</CartItemPrice>
      </CartItemInfo>
      <CartItemRemove onClick={() => removeItem(item)}>
        <i className="fas fa-window-close"></i>
      </CartItemRemove>
    </CartItemContainer>
  );
};

export default connect(null, { removeItem })(cartItem);
