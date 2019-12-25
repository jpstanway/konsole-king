import styled, { css } from "styled-components";

const getButtonStyles = props => {
  if (props.googleSignIn) {
    return googleSignInStyles;
  }

  return defaultButtonStyles;
};

const defaultButtonStyles = css`
  background-color: var(--color-primary);
  color: var(--color-white);

  &:hover,
  &:active {
    background-color: var(--color-primary-light);
  }
`;

const googleSignInStyles = css`
  background-color: var(--color-secondary);
  color: var(--color-white);

  &:hover,
  &:active {
    background-color: var(--color-secondary-light);
  }
`;

export const CustomButtonContainer = styled.button`
  width: 100%;
  border: 0;
  border-radius: 4px;
  font-weight: 700;
  padding: 2rem;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  ${getButtonStyles}
`;
