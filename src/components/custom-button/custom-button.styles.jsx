import styled, { css } from "styled-components";

const getButtonStyles = (props) => {
  if (props.googleSignIn) {
    return googleSignInStyles;
  } else if (props.btnLink) {
    return linkButtonStyles;
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
  transform: translateY(-4rem);
  width: 100%;

  &:hover,
  &:active {
    background-color: var(--color-secondary-light);
  }
`;

const linkButtonStyles = css`
  background: transparent;
  color: var(--color-primary);
  font-weight: 500;
  padding: 0;
  width: 12rem;
  margin-top: 2rem;

  &:hover {
    color: var(--color-primary-light);
  }
`;

export const CustomButtonContainer = styled.button`
  border: 0;
  border-radius: 4px;
  font-weight: 700;
  padding: 2rem;
  width: 16rem;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  ${getButtonStyles}
`;
