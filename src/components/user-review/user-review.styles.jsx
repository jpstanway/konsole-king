import styled from "styled-components";

export const UserReviewContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 5rem;
  }
`;

export const UserReviewTextBubble = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
  width: 100%;
  z-index: 0;

  &::before {
    background-color: var(--color-white);
    border-color: rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 0px 0px 1px 1px;
    content: "";
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: 15px;
    left: -10px;
    transform: rotate(55deg) skewY(-20deg);
    z-index: 999;
  }
`;

export const UserReviewDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserReviewDate = styled.span`
  color: var(--color-grey);
  font-size: 1.5rem;
`;

export const UserReviewAvatar = styled.div`
  background-color: var(--color-grey-light);
  color: var(--color-white);
  padding: 2rem;
  margin-right: 2rem;
  height: 7rem;
  width: 7rem;
`;

export const UserNameAndRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const UserReviewName = styled.h4`
  color: var(--color-tertiary);
  margin-right: 1rem;
`;

export const UserRating = styled.span`
  color: var(--color-grey);
  font-weight: 700;
  font-size: 1.4rem;
`;

export const UserReviewText = styled.p`
  color: var(--color-grey-dark);
  margin-bottom: 2rem;
`;
