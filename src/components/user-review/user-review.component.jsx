import React from "react";
import PropTypes from "prop-types";

import {
  UserReviewTextBubble,
  UserReviewContainer,
  UserReviewDetails,
  UserReviewAvatar,
  UserNameAndRating,
  UserReviewName,
  UserRating,
  UserReviewDate,
  UserReviewText
} from "./user-review.styles";

const UserReview = ({ review }) => {
  const date = new Date(review.date);

  return (
    <UserReviewContainer>
      <UserReviewAvatar>
        <i className="fas fa-user fa-2x"></i>
      </UserReviewAvatar>
      <UserReviewTextBubble>
        <UserReviewDetails>
          <UserNameAndRating>
            <UserReviewName>{review.name}</UserReviewName>
            <UserRating>{review.rating} out of 5</UserRating>
          </UserNameAndRating>
          <UserReviewDate>{date.toLocaleString()}</UserReviewDate>
        </UserReviewDetails>
        <UserReviewText>{review.review}</UserReviewText>
      </UserReviewTextBubble>
    </UserReviewContainer>
  );
};

UserReview.propTypes = {
  review: PropTypes.object.isRequired
};

export default UserReview;
