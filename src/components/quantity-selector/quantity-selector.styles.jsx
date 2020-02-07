import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SelectorValue = styled.input`
  font-size: 1.8rem;
  text-align: center;
  width: 5rem;
`;

export const SelectorButton = styled.button`
  padding: 1rem;
  border: 0;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  background-color: var(--color-grey-light);

  &:hover {
    color: var(--color-primary);
  }

  &:focus,
  &:active {
    outline: none;
  }
`;
