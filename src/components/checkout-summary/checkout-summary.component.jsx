import React from "react";

import {
  CheckoutSummaryContainer,
  CheckoutSummaryTitle,
  CheckoutSummaryList,
  CheckoutSummaryItem
} from "./checkout-summary.styles";

import calculateTax from "../../scripts/calculateTax";

const CheckoutSummary = ({ cartTotal }) => {
  const total = cartTotal / 100;
  const tax = calculateTax(cartTotal);
  const finalTotal = Number.parseFloat(Number(total) + Number(tax)).toFixed(2);

  return (
    <CheckoutSummaryContainer>
      <CheckoutSummaryTitle>Summary</CheckoutSummaryTitle>
      <CheckoutSummaryList>
        <CheckoutSummaryItem>
          <strong>Total:</strong> ${total}
        </CheckoutSummaryItem>
        <CheckoutSummaryItem>
          <strong>Tax:</strong> ${tax}
        </CheckoutSummaryItem>
        <CheckoutSummaryItem>
          <strong>Shipping:</strong> FREE
        </CheckoutSummaryItem>
        <CheckoutSummaryItem className="final-total">
          <strong>Final Total:</strong> ${finalTotal}
        </CheckoutSummaryItem>
      </CheckoutSummaryList>
    </CheckoutSummaryContainer>
  );
};

export default CheckoutSummary;
