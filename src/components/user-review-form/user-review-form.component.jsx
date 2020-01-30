import React, { Component } from "react";

import { ReviewForm } from "./user-review-form.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { updateItemReviews } from "../../firebase/firebase.utils";

class UserReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      review: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { name, email, review } = this.state;
    const { item, categoryName } = this.props;

    const reviewObject = {
      name,
      email,
      review,
      date: Date.now()
    };

    updateItemReviews(categoryName, item, reviewObject);

    try {
      this.setState({
        name: "",
        email: "",
        review: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <ReviewForm onSubmit={this.onSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="name"
          onChange={this.handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={this.handleChange}
        />
        <FormInput
          label="Your Review"
          name="review"
          onChange={this.handleChange}
          textarea
        />
        <CustomButton type="submit">Submit</CustomButton>
      </ReviewForm>
    );
  }
}

export default UserReviewForm;
