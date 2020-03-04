import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CardContainer,
  CardInfoContainer,
  CardProductLink,
  CardProductPrice,
  CardProductImage,
  CardPurchaseContainer
} from "./product-card-alt.styles";

import { removeItemFromWishlist } from "../../firebase/firebase.utils";
import { addItem, removeItem } from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import CustomButton from "../custom-button/custom-button.component";

const ProductCardAlt = ({
  item,
  categoryId,
  currentUser,
  addItem,
  removeItem,
  checkoutCard
}) => {
  const handleAddItemToCart = item => {
    addItem(item);
    removeItemFromWishlist(currentUser.id, item);
  };

  return (
    <CardContainer>
      <CardProductImage src={item.imageUrl} alt="product" />
      <CardInfoContainer>
        <CardProductLink to={`/browse/${categoryId}/${item.id}`}>
          {item.item}
        </CardProductLink>
        <CardProductPrice>${Number(item.price) / 100}</CardProductPrice>
      </CardInfoContainer>
      <CardPurchaseContainer>
        {checkoutCard ? (
          <p>Quantity: {item.quantity}</p>
        ) : (
          <CustomButton onClick={() => handleAddItemToCart(item)}>
            Add To Cart
          </CustomButton>
        )}
        <CustomButton
          onClick={() =>
            checkoutCard
              ? removeItem(item)
              : removeItemFromWishlist(currentUser.id, item)
          }
          btnLink
        >
          <i className="fas fa-window-close"></i> Remove
        </CustomButton>
      </CardPurchaseContainer>
    </CardContainer>
  );
};

ProductCardAlt.propTypes = {
  item: PropTypes.object.isRequired,
  categoryId: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { addItem, removeItem })(
  ProductCardAlt
);
