import React from "react";
import { connect } from "react-redux";

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

import CustomButton from "../custom-button/custom-button.component";

const ProductCardAlt = ({
  item,
  categoryId,
  currentUser,
  addItem,
  removeItem,
  checkoutCard
}) => (
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
        <CustomButton onClick={() => addItem(item)}>Add To Cart</CustomButton>
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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { addItem, removeItem })(
  ProductCardAlt
);
