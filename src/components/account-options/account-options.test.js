import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import AccountOptions from "./account-options.component";

describe("<AccountOptions />", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Router>
        <AccountOptions />
      </Router>
    );
  });

  test("renders content", () => {
    expect(component.container).toHaveTextContent("Wishlist");
  });

  test("toggle between options", () => {
    const toggleWishlist = component.getByText("Wishlist");
    const toggleOrderHistory = component.getByText("Order History");

    fireEvent.click(toggleWishlist);
    expect(toggleWishlist.classList).toContain("account-option-active");

    fireEvent.click(toggleOrderHistory);
    expect(toggleOrderHistory.classList).toContain("account-option-active");
  });
});
