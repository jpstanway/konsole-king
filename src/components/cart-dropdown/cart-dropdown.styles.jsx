import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 2.5rem);
  grid-template-columns: 5rem 7rem;
  align-items: center;
`;

export const CartIcon = styled.i`
  color: var(--color-primary);
  grid-row: 1 / -1;
`;

export const CartTotal = styled.h3`
  font-weight: 700;
  color: var(--color-secondary);
`;
