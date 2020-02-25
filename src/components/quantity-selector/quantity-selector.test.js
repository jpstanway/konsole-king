import React, { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import QuantitySelector from "./quantity-selector.component";

describe("<QuantitySelector />", () => {
  test("renders component", () => {
    const component = render(<QuantitySelector />);

    expect(component.container).toHaveTextContent("-");
  });
});
