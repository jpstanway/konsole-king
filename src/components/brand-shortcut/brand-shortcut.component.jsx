import React from "react";
import PropTypes from "prop-types";

import {
  CategoryOverlay,
  CategoryContainer,
  CategoryImg,
  CategoryLogo,
} from "./brand-shortcut.styles";

const BrandShortcut = ({
  category: { logo, platform, company, color, console },
}) => (
  <CategoryContainer
    className="brand-shortcut"
    to={`/browse/consoles?allConsoles=true&brand=${company}`}
    color={color}
  >
    <CategoryLogo src={logo} alt={platform} />
    <CategoryImg src={console} alt={platform} />
    <CategoryOverlay />
  </CategoryContainer>
);

BrandShortcut.propTypes = {
  category: PropTypes.object.isRequired,
};

export default BrandShortcut;
