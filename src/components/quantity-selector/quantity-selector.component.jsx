import React from "react";

import {
  SelectorContainer,
  SelectorValue,
  SelectorButton
} from "./quantity-selector.styles";

const QuantitySelector = ({ quantity, setQuantity }) => {
  if (quantity < 1 || quantity > 99) {
    setQuantity(1);
  }

  const increment = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SelectorContainer>
      <SelectorButton onClick={decrement}>-</SelectorButton>
      <SelectorValue
        type="text"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      />
      <SelectorButton onClick={increment}>+</SelectorButton>
    </SelectorContainer>
  );
};

export default QuantitySelector;
