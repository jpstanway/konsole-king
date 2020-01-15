import React from "react";

import {
  SelectorContainer,
  SelectorValue,
  SelectorButton
} from "./quantity-selector.styles";

const QuantitySelector = () => (
  <SelectorContainer>
    <SelectorButton>-</SelectorButton>
    <SelectorValue>0</SelectorValue>
    <SelectorButton>+</SelectorButton>
  </SelectorContainer>
);

export default QuantitySelector;
