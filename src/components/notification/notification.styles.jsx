import styled, { css } from "styled-components";

const getHiddenStatus = props => {
  if (!props.hidden) {
    return showStyle;
  }

  return hiddenStyle;
};

const getErrorStatus = props => {
  if (!props.error) {
    return bgSuccess;
  }

  return bgError;
};

const hiddenStyle = css`
  top: -10rem;
  opacity: 0;
`;

const showStyle = css`
  animation: 0.3s ease-out show;

  @keyframes show {
    from {
      top: -10rem;
      opacity: 0;
    }

    to {
      top: 5rem;
      opacity: 1;
    }
  }
`;

const bgSuccess = css`
  background-color: var(--color-tertiary-light);
`;

const bgError = css`
  background-color: var(--color-secondary-light);
`;

export const NotificationContainer = styled.div`
  border: 1px solid var(--color-grey-dark);
  border-radius: 4px;
  padding: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 50rem;
  z-index: 999;

  ${getHiddenStatus}
  ${getErrorStatus}
`;

export const NotificationText = styled.p`
  color: var(--color-grey-dark);
  font-size: 1.7rem;
  letter-spacing: 0.25rem;
`;
