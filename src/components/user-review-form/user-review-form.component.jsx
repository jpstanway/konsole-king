import React, { Component } from "react";

import {
  ReviewForm,
  RatingContainer,
  RatingLabel,
  Rating,
  RatingSelection
} from "./user-review-form.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { updateItemReviews } from "../../firebase/firebase.utils";

class UserReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
      review: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { name, rating, review } = this.state;
    const { item, categoryName } = this.props;

    const reviewObject = {
      name,
      rating,
      review,
      date: Date.now()
    };

    try {
      await updateItemReviews(categoryName, item, reviewObject);

      this.setState({
        name: "",
        rating: "",
        review: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { name, rating, review } = this.state;

    return (
      <ReviewForm onSubmit={this.onSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <RatingContainer>
          <RatingLabel htmlFor="rating">Rating</RatingLabel>
          <Rating>
            <RatingSelection
              name="rating"
              onChange={this.handleChange}
              value={rating}
              required
            >
              <option value="">---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </RatingSelection>
            <span>out of 5</span>
          </Rating>
        </RatingContainer>
        <FormInput
          label="Your Review"
          name="review"
          onChange={this.handleChange}
          value={review}
          textarea
        />
        <CustomButton type="submit">Submit</CustomButton>
      </ReviewForm>
    );
  }
}

export default UserReviewForm;
