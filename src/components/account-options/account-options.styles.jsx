import styled from "styled-components";
import { Link } from "react-router-dom";

export const OptionsContainer = styled.div`
  display: flex;
  padding: 0rem 2rem;
  width: 100%;
`;

export const OptionButton = styled(Link)`
  background-color: var(--color-grey);
  color: var(--color-white);
  border: 2px solid var(--color-grey);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  width: 20rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    color: var(--color-grey-light);
  }

  i {
    margin-right: 1rem;
  }
`;
