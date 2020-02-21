import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import MainMenu from "./main-menu.component";

test("renders component", () => {
  const { container } = render(
    <Router>
      <MainMenu />
    </Router>
  );

  expect(container).toHaveTextContent("All Categories");
});
