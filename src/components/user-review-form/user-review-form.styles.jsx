import styled from "styled-components";

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  width: 100%;

  input {
    margin-bottom: 1rem;
  }

  button {
    align-self: flex-end;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const RatingLabel = styled.label`
  color: var(--color-grey-dark);
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingSelection = styled.select`
  margin-right: 5px;
  padding: 1rem;
`;
