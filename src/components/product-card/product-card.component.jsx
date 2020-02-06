import React from "react";
import { connect } from "react-redux";

import {
  CardContainer,
  CardInfoContainer,
  CardProductImage,
  CardProductLink,
  CardBrandName,
  CardDivider,
  CardProductPrice,
  CardPurchaseContainer
} from "./product-card.styles";

import CustomButton from "../custom-button/custom-button.component";

import { updateOrderHistoryAndWishlist } from "../../firebase/firebase.utils";

const ProductCard = ({ item, categoryId, currentUser }) => (
  <CardContainer>
    <CardInfoContainer>
      <CardProductImage src={item.imageUrl} alt="product" />
      <CardProductLink to={`/browse/${categoryId}/${item.id}`}>
        {item.item}
      </CardProductLink>
      <CardBrandName>{item.company}</CardBrandName>
      <CardDivider />
      <CardProductPrice>${Number(item.price) / 100}</CardProductPrice>
    </CardInfoContainer>
    <CardPurchaseContainer>
      <CustomButton>Add To Cart</CustomButton>
      <CustomButton
        onClick={() => updateOrderHistoryAndWishlist(currentUser.id, item)}
        btnLink
      >
        <i className="fas fa-heart"></i> Add To Wishlist
      </CustomButton>
    </CardPurchaseContainer>
  </CardContainer>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(ProductCard);
