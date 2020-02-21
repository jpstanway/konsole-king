import React from "react";
import PropTypes from "prop-types";

import {
  CategoryOverlay,
  CategoryContainer,
  CategoryImg,
  CategoryLogo
} from "./brand-shortcut.styles";

const BrandShortcut = ({ category: { banner, logo, platform, company } }) => (
  <CategoryContainer to={`/browse/consoles?allConsoles=true&brand=${company}`}>
    <CategoryImg src={banner} alt={platform} />
    <CategoryLogo src={logo} alt={platform} />
    <CategoryOverlay />
  </CategoryContainer>
);

BrandShortcut.propTypes = {
  category: PropTypes.object.isRequired
};

export default BrandShortcut;
