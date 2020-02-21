import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import UserReviewForm from "./user-review-form.component";

test("renders component", () => {
  const item = {
    id: 305,
    item: "NES",
    category: "legacy",
    consoleType: "home",
    company: "Nintendo",
    yearOfRelease: "1985",
    price: "5999",
    imageUrl:
      "https://res.cloudinary.com/mtninja/image/upload/v1578540351/nes-500_yaznsx.jpg",
    description:
      "From your first Goomba stomp to your thousandth victory in Final Fantasy, the Nintendo Entertainment System may just be the most nostalgic gaming console ever. And now, a new, miniaturized version is here, pre-loaded with 30 of the all-time greatest games, including The Legend of Zelda, Super Mario Bros. 3, and Mega Man 2. Just plug it in…and play.",
    addInfo: {
      weight: "676 g",
      dimensions: "7.5 x 22.5 x 16.5 cm",
      color: "grey"
    },
    reviews: []
  };

  const { container } = render(<UserReviewForm item={item} />);

  expect(container).toHaveTextContent("Submit");
});
