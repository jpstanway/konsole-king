import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import MainSlider from "./main-slider.component";

describe("<MainSlider />", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Router>
        <MainSlider />
      </Router>
    );
  });

  test("renders component", () => {
    expect(component.container).toHaveTextContent("Shop Now");
  });

  test("can toggle between slides", () => {
    const slideOne = component.container.querySelector("#slide-one");
    const slideTwo = component.container.querySelector("#slide-two");
    const slideOneBtn = component.container.querySelector("#slide-one-btn");
    const slideTwoBtn = component.container.querySelector("#slide-two-btn");

    fireEvent.click(slideTwoBtn);
    expect(slideTwo.classList).toContain("show-slide-two");

    fireEvent.click(slideOneBtn);
    expect(slideOne.classList).toContain("show-slide-one");
  });
});
