import React from "react";

import {
  AllCategoriesContainer,
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewLink
} from "./all-categories.styles";

import ProductCard from "../../components/product-card/product-card.component";

const AllCategories = () => (
  <AllCategoriesContainer>
    <CategoryPreviewContainer>
      <CategoryPreviewTitle>Category Name</CategoryPreviewTitle>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <CategoryPreviewLink to="/">
        <i className="fas fa-chevron-right fa-5x"></i>
      </CategoryPreviewLink>
    </CategoryPreviewContainer>
    <CategoryPreviewContainer>
      <CategoryPreviewTitle>Category Name</CategoryPreviewTitle>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <CategoryPreviewLink to="/">
        <i className="fas fa-chevron-right fa-5x"></i>
      </CategoryPreviewLink>
    </CategoryPreviewContainer>
  </AllCategoriesContainer>
);

export default AllCategories;
