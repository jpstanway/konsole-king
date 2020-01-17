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

const UserReview = () => (
  <UserReviewContainer>
    <UserReviewAvatar>
      <i className="fas fa-user fa-2x"></i>
    </UserReviewAvatar>
    <UserReviewTextBubble>
      <UserReviewDetails>
        <UserReviewName>John Smith</UserReviewName>
        <UserReviewDate>2020-01-15</UserReviewDate>
      </UserReviewDetails>
      <UserReviewText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ab maxime, voluptas veniam magnam ratione repudiandae sapiente tempore
        sed adipisci consequuntur, nam praesentium minus error commodi, eligendi
        ut recusandae reiciendis!
      </UserReviewText>
    </UserReviewTextBubble>
  </UserReviewContainer>
);

export default UserReview;
