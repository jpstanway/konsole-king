import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import BrandShortcut from "./brand-shortcut.component";
import nintendoBanner from "../../assets/nintendo_banner_1.png";
import nintendoLogo from "../../assets/nintendo-logo.png";

test("renders content", () => {
  const brand = {
    platform: "nintendo",
    company: "Nintendo",
    banner: nintendoBanner,
    logo: nintendoLogo
  };

  const { getAllByAltText } = render(
    <Router>
      <BrandShortcut category={brand} />
    </Router>
  );

  expect(getAllByAltText("nintendo")).toHaveLength(2);
});
