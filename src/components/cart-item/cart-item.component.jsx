import React from "react";
import PropTypes from "prop-types";
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

const CartItem = ({ item, removeItem }) => {
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
      <CartItemRemove id="cart-remove" onClick={() => removeItem(item)}>
        <i className="fas fa-window-close"></i>
      </CartItemRemove>
    </CartItemContainer>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default connect(null, { removeItem })(CartItem);
