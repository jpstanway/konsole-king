import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import MainSlider from "./main-slider.component";

describe("<MainSlider />", () => {
  test("renders component", () => {
    const { container } = render(
      <Router>
        <MainSlider />
      </Router>
    );

    expect(container).toHaveTextContent("Shop Now");
  });
});
