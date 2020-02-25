import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import FormInput from "./form-input.component";

describe("<FormInput />", () => {
  const mockHandleChange = jest.fn();
  let component;

  beforeEach(() => {
    component = render(
      <FormInput
        label="Username"
        type="text"
        name="username"
        onChange={mockHandleChange}
        value=""
      />
    );
  });

  test("renders component", () => {
    expect(component.container).toHaveTextContent("Username");
  });

  test("onChange handler fires", () => {
    const input = component.getByLabelText("Username");
    fireEvent.change(input, { target: { value: "ABC" } });

    expect(mockHandleChange.mock.calls.length).toBe(1);
  });
});
