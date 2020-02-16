import React from "react";

import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewLink
} from "./category-preview.styles";

import ProductCard from "../../components/product-card/product-card.component";

const CategoryPreview = ({ title, items }) => (
  <CategoryPreviewContainer>
    <CategoryPreviewTitle>{title}</CategoryPreviewTitle>
    {items.slice(0, 4).map(item => (
      <ProductCard key={item.id} item={item} categoryId={title} />
    ))}
    <CategoryPreviewLink to={`/browse/${title}`}>
      <i className="fas fa-chevron-right fa-5x"></i>
    </CategoryPreviewLink>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
