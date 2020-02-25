import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import CustomButton from "./custom-button.component";

describe("<CustomButton />", () => {
  test("renders component", () => {
    const { container } = render(<CustomButton>Test</CustomButton>);

    expect(container).toHaveTextContent("Test");
  });
});
