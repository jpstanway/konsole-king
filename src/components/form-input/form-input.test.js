import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import FormInput from "./form-input.component";

test("renders component", () => {
  const mockHandleChange = jest.fn();
  const component = render(
    <FormInput
      label="Username"
      type="text"
      name="username"
      onChange={mockHandleChange}
      value=""
    />
  );

  expect(component.container).toHaveTextContent("Username");
});
