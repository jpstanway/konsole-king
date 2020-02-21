import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import CustomButton from "./custom-button.component";

test("renders component", () => {
  const component = render(<CustomButton>Test</CustomButton>);

  expect(component.container).toHaveTextContent("Test");
});
