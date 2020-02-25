import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import TabbedContainer from "./tabbed-container.component";

describe("<TabbedContainer />", () => {
  let component;
  const item = {
    id: 304,
    item: "Xbox",
    category: "legacy",
    consoleType: "home",
    company: "Microsoft",
    yearOfRelease: "2001",
    price: "6999",
    imageUrl:
      "https://res.cloudinary.com/mtninja/image/upload/v1578540354/xbox-500_efywoo.jpg",
    description:
      "Take the power and flexibility of a dedicated computer gaming system and combine it with the easy-to-use, instant-on format of a high-end console system and what do you get? Well, if you also add in DVD playback ability and broadband Internet connectivity, you get Xbox.",
    addInfo: {
      weight: "227 g",
      dimensions: "43.2 x 35.6 x 12.7 cm",
      color: "black + green"
    },
    reviews: []
  };

  beforeEach(() => {
    component = render(<TabbedContainer item={item} />);
  });

  test("renders component", () => {
    expect(component.container).toHaveTextContent("Description");
  });

  test("can click to another tab", () => {
    const addInfoBtn = component.getByText("Additional Information");
    fireEvent.click(addInfoBtn);

    expect(component.container).toHaveTextContent("227 g");
  });
});
