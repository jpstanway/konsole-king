import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import QuantitySelector from "./quantity-selector.component";

test("renders component", () => {
  const { container } = render(<QuantitySelector />);

  expect(container).toHaveTextContent("-");
});
