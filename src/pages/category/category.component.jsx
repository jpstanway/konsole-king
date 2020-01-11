import React from "react";
import { connect } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategory } from "../../redux/browse/browse.selectors";

import {
  CategoryContainer,
  CategoryTitle,
  CategoryItems
} from "./category.styles";

const Category = ({ category }) => (
  <CategoryContainer>
    <CategoryTitle>{category.title.toUpperCase()}</CategoryTitle>
    <CategoryItems>
      {category.items.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </CategoryItems>
  </CategoryContainer>
);

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Category);
