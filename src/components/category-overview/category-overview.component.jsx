import React from "react";

import { CategoryContainer, CategoryTitle } from "./category-overview.styles";

const CategoryOverview = props => (
  <CategoryContainer to="/">
    <CategoryTitle>{props.category}</CategoryTitle>
  </CategoryContainer>
);

export default CategoryOverview;
