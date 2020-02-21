import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import AccountOptions from "./account-options.component";

test("renders content", () => {
  const component = render(
    <Router>
      <AccountOptions />
    </Router>
  );

  expect(component.container).toHaveTextContent("Wishlist");
});
