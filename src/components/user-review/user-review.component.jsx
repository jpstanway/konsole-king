import React from "react";

import {
  UserReviewTextBubble,
  UserReviewContainer,
  UserReviewDetails,
  UserReviewAvatar,
  UserReviewName,
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
          <UserReviewName>{review.name}</UserReviewName>
          <UserReviewDate>{date.toLocaleString()}</UserReviewDate>
        </UserReviewDetails>
        <UserReviewText>{review.review}</UserReviewText>
      </UserReviewTextBubble>
    </UserReviewContainer>
  );
};

export default UserReview;
