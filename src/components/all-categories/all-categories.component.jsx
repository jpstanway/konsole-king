import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  AllCategoriesContainer,
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewLink
} from "./all-categories.styles";

import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesForPreview } from "../../redux/browse/browse.selectors";

const AllCategories = ({ categories }) => (
  <AllCategoriesContainer>
    <h2>Browse</h2>
    {categories.map(({ id, title }) => (
      <CategoryPreviewContainer key={id}>
        <CategoryPreviewTitle>{title}</CategoryPreviewTitle>
        <ProductCard />
        <CategoryPreviewLink to={`/browse/${title}`}>
          <i className="fas fa-chevron-right fa-5x"></i>
        </CategoryPreviewLink>
      </CategoryPreviewContainer>
    ))}
  </AllCategoriesContainer>
);

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesForPreview
});

export default connect(mapStateToProps)(AllCategories);
