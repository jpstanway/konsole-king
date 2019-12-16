import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  width: 15rem;
  border: 0;
  border-radius: 4px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  padding: 2rem;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--color-primary-light);
  }

  &:focus {
    outline: 0;
  }
`;
