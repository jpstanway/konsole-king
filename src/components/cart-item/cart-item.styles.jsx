import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartItemContainer = styled.div`
  border: 1px solid var(--color-grey);
  border-radius: 2px;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 20%;
  margin-bottom: 5px;
  padding: 5px;
  height: 7rem;
  width: 100%;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CartItemImage = styled.img`
  height: 4rem;
  margin: auto 0;
`;

export const CartItemTitle = styled(Link)`
  max-height: 1.6rem;
  overflow: hidden;
`;

export const CartItemPrice = styled.p`
  color: var(--color-tertiary);
`;

export const CartItemRemove = styled.button`
  background-color: transparent;
  color: var(--color-secondary);
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-secondary-light);
  }
`;
