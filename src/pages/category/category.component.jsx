import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

const Category = ({ category, location }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (location.state) {
      setSearchValue(location.state.searchValue.toLowerCase());
    }
  }, [location, setSearchValue]);

  return (
    <CategoryContainer>
      <BackLink to="/browse">
        <i className="fas fa-chevron-left"></i>
        <span>back</span>
      </BackLink>
      <CategoryTitle>{category.title.toUpperCase()}</CategoryTitle>
      <CategoryItems>
        {category.items
          .filter(
            item =>
              item.item.toLowerCase().includes(searchValue) ||
              item.company.toLowerCase().includes(searchValue)
          )
          .map(item => (
            <ProductCard key={item.id} item={item} categoryId={item.category} />
          ))}
      </CategoryItems>
    </CategoryContainer>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired
};

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
