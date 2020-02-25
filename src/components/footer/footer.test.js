import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Footer from "./footer.component";

describe("<Footer />", () => {
  test("renders component", () => {
    const { container } = render(
      <Router>
        <Footer />
      </Router>
    );

    expect(container).toHaveTextContent("Find It Fast");
  });
});
