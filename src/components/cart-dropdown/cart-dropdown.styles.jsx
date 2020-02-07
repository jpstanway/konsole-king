import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 2.5rem);
  grid-template-columns: 5rem 7rem;
  align-items: center;
  margin-left: 2rem;
  position: relative;
`;

export const CartIcon = styled.i`
  color: var(--color-primary);
  cursor: pointer;
  grid-row: 1 / -1;

  &:hover {
    color: var(--color-primary-light);
  }
`;

export const CartTotal = styled.h3`
  font-weight: 700;
  color: var(--color-secondary);
`;

export const Cart = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-dark);
  border-radius: 2px;
  display: none;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: -14rem;
  transition: all 0.3s;
  width: 25rem;
  z-index: 999;

  .checkout {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const CartMessage = styled.p`
  color: var(--color-grey);
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;
