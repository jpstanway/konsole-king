import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CheckoutSummary from "./checkout-summary.component";

describe("<CheckoutSummary />", () => {
  test("renders component", () => {
    const cartTotal = 13999;

    const { container } = render(<CheckoutSummary cartTotal={cartTotal} />);

    expect(container).toHaveTextContent("$149.79");
  });
});
