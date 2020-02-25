import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import AuthForm from "./auth-form.component";
import FormInput from "../form-input/form-input.component";

describe("<AuthForm />", () => {
  let component;
  const mockOnSubmit = jest.fn();
  const mockOnChange = jest.fn();

  beforeEach(() => {
    component = render(
      <AuthForm
        onSubmit={mockOnSubmit}
        title="Test Form"
        subTest="test version of auth form"
        btnText="Test"
      >
        <FormInput
          label="email"
          type="email"
          onChange={mockOnChange}
          value=""
        />
      </AuthForm>
    );
  });

  test("renders component", () => {
    expect(component.container).toHaveTextContent("Test Form");
  });

  test("onsubmit fires", () => {
    const submitBtn = component.getByText("Test");
    fireEvent.click(submitBtn);

    expect(mockOnSubmit.mock.calls.length).toBe(1);
  });
});
