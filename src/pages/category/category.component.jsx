import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import ProductCard from "../../components/product-card/product-card.component";

import {
  selectCategory,
  selectCustomCategory
} from "../../redux/browse/browse.selectors";

import {
  CategoryContainer,
  CategoryTitle,
  CategoryItems,
  BackLink
} from "./category.styles";

const Category = ({ category }) => (
  <CategoryContainer>
    <BackLink to="/browse">
      <i className="fas fa-chevron-left"></i>
      <span>back</span>
    </BackLink>
    <CategoryTitle>{category.title.toUpperCase()}</CategoryTitle>
    <CategoryItems>
      {category.items.map(item => (
        <ProductCard key={item.id} item={item} categoryId={item.category} />
      ))}
    </CategoryItems>
  </CategoryContainer>
);

const mapStateToProps = (state, ownProps) => {
  let selection;

  if (ownProps.location.search) {
    const values = queryString.parse(ownProps.location.search);
    selection = values.allConsoles ? selectCustomCategory(values) : null;
  }

  return {
    category: selection
      ? selection(state)
      : selectCategory(ownProps.match.params.categoryId)(state)
  };
};

export default connect(mapStateToProps)(Category);
