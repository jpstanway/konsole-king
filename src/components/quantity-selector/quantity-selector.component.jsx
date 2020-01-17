import React, { useState } from "react";

import {
  SelectorContainer,
  SelectorValue,
  SelectorButton
} from "./quantity-selector.styles";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SelectorContainer>
      <SelectorButton onClick={decrement}>-</SelectorButton>
      <SelectorValue>{quantity}</SelectorValue>
      <SelectorButton onClick={increment}>+</SelectorButton>
    </SelectorContainer>
  );
};

export default QuantitySelector;
