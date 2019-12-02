import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
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
