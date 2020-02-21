import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  AllCategoriesContainer,
  AllCategoriesTitle
} from "./all-categories.styles";

import CategoryPreview from "../category-preview/category-preview.component";
import ProductCard from "../product-card/product-card.component";

import { selectCategoriesForPreview } from "../../redux/browse/browse.selectors";

const AllCategories = ({ categories, location }) => (
  <AllCategoriesContainer>
    <AllCategoriesTitle>Browse</AllCategoriesTitle>
    {categories
      .sort((a, b) => a.categoryRank - b.categoryRank)
      .map(({ id, title, items }) => {
        if (location.state) {
          const searchValue = location.state.searchValue.toLowerCase();

          return items
            .filter(
              item =>
                item.item.toLowerCase().includes(searchValue) ||
                item.company.toLowerCase().includes(searchValue)
            )
            .map(item => (
              <ProductCard key={item.id} item={item} categoryId={title} />
            ));
        }

        return <CategoryPreview key={id} title={title} items={items} />;
      })}
  </AllCategoriesContainer>
);

AllCategories.propTypes = {
  categories: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesForPreview
});

export default connect(mapStateToProps)(AllCategories);
