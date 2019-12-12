import React from "react";

import { CategoryContainer, CategoryImg } from "./category-overview.styles";

const CategoryOverview = props => (
  <CategoryContainer to="/">
    <CategoryImg src={props.category} alt={props.category} />
  </CategoryContainer>
);

export default CategoryOverview;
