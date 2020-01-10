import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  AllCategoriesContainer,
  AllCategoriesTitle,
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewLink
} from "./all-categories.styles";

import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesForPreview } from "../../redux/browse/browse.selectors";

const AllCategories = ({ categories }) => (
  <AllCategoriesContainer>
    <AllCategoriesTitle>Browse</AllCategoriesTitle>
    {categories
      .sort((a, b) => a.categoryRank - b.categoryRank)
      .map(({ id, title, items }) => (
        <CategoryPreviewContainer key={id}>
          <CategoryPreviewTitle>{title}</CategoryPreviewTitle>
          {items.slice(0, 4).map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
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
