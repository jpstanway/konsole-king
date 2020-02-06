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

import CustomButton from "../custom-button/custom-button.component";

const ProductCardAlt = ({ item, categoryId, currentUser }) => (
  <CardContainer>
    <CardProductImage src={item.imageUrl} alt="product" />
    <CardInfoContainer>
      <CardProductLink to={`/browse/${categoryId}/${item.id}`}>
        {item.item}
      </CardProductLink>
      <CardProductPrice>${Number(item.price) / 100}</CardProductPrice>
    </CardInfoContainer>
    <CardPurchaseContainer>
      <CustomButton>Add To Cart</CustomButton>
      <CustomButton
        onClick={() => removeItemFromWishlist(currentUser.id, item)}
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

export default connect(mapStateToProps)(ProductCardAlt);
