import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import UserReview from "./user-review.component";

describe("<UserReview />", () => {
  test("renders component", () => {
    const review = {
      name: "John Doe",
      rating: 4,
      review: "test review",
      date: Date.now()
    };

    const { container } = render(<UserReview review={review} />);

    expect(container).toHaveTextContent("test review");
  });
});
