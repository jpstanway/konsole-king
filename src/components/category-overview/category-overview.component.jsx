import React from "react";

import {
  CategoryOverlay,
  CategoryContainer,
  CategoryImg,
  CategoryLogo
} from "./category-overview.styles";

const CategoryOverview = ({
  category: { banner, logo, platform, company }
}) => (
  <CategoryContainer to={`/browse/consoles?allConsoles=true&brand=${company}`}>
    <CategoryImg src={banner} alt={platform} />
    <CategoryLogo src={logo} alt={platform} />
    <CategoryOverlay />
  </CategoryContainer>
);

export default CategoryOverview;
