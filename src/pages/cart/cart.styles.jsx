import styled from "styled-components";
import { size } from "../../scripts/media";

export const CartPage = styled.div`
  padding: 5rem 2rem;
  width: 100%;
  max-width: ${size.laptopM};
  margin: auto;
`;

export const CartTitle = styled.h1`
  color: var(--color-grey-dark);
  margin-bottom: 1rem;
`;

export const CartTotal = styled.div`
  border-bottom: 2px solid var(--color-grey);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem 0rem;
`;

export const Total = styled.h3`
  align-self: flex-end;
  color: var(--color-secondary);
  font-weight: 700;
  font-size: 2rem;
  margin-right: 5rem;
`;
