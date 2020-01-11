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

const ProductCard = ({ item, categoryId }) => (
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
      <CustomButton btnLink>
        <i className="fas fa-heart"></i> Add To Wishlist
      </CustomButton>
    </CardPurchaseContainer>
  </CardContainer>
);

export default ProductCard;
