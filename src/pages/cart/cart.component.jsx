import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { CartPage, CartTitle, CartTotal, Total } from "./cart.styles";

import ProductCardAlt from "../../components/product-card-alt/product-card-alt.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import { updateTotal } from "../../redux/cart/cart.actions";

const Cart = ({ cartItems, cartTotal, updateTotal }) => {
  let cartContents;

  useEffect(() => {
    updateTotal(cartItems);
  }, [cartItems, updateTotal]);

  if (cartItems && cartItems.length > 0) {
    cartContents = cartItems.map(cartItem => (
      <ProductCardAlt
        key={cartItem.id}
        item={cartItem}
        categoryId={cartItem.category}
        checkoutCard
      />
    ));
  } else {
    cartContents = <p>Cart is empty</p>;
  }

  return (
    <CartPage>
      <CartTitle>Cart</CartTitle>
      {cartContents}
      <CartTotal>
        <Total>Total: ${cartTotal / 100}</Total>
        <Link to="/checkout">
          <CustomButton disabled={cartItems.length === 0 ? true : false}>
            Confirm Checkout
          </CustomButton>
        </Link>
      </CartTotal>
    </CartPage>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
  cartTotal: PropTypes.string,
  updateTotal: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps, { updateTotal })(Cart);
