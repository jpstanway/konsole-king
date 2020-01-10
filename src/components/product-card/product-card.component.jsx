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

const ProductCard = ({ item }) => (
  <CardContainer>
    <CardInfoContainer>
      <CardProductImage
        src={item.imageUrl}
        alt="product"
        className={item.id >= 500 && item.id <= 599 ? "audio" : ""}
      />
      <CardProductLink to="/">{item.item}</CardProductLink>
      <CardBrandName>{item.company}</CardBrandName>
      <CardDivider />
      <CardProductPrice>${Number(item.price) / 100}</CardProductPrice>
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
