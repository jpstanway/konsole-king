import React from "react";

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

const ProductCard = () => (
  <CardContainer>
    <CardInfoContainer>
      <CardProductImage src="" alt="product" />
      <CardProductLink to="/">product name</CardProductLink>
      <CardBrandName>brand</CardBrandName>
      <CardDivider />
      <CardProductPrice>$999.99</CardProductPrice>
    </CardInfoContainer>
    <CardPurchaseContainer>
      <CustomButton>Add To Cart</CustomButton>
      <CustomButton btnLink>
        <i className="fas fa-heart"></i> Add To Wishlist
      </CustomButton>
    </CardPurchaseContainer>
  </CardContainer>
);

export default ProductCard;
