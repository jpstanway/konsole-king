import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  margin-right: 5px;
  margin-bottom: 2rem;
  padding: 1rem;
  position: relative;
  width: 100%;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const CardInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const CardProductLink = styled(Link)`
  font-size: 1.8rem;
  margin: 1rem 0rem;
`;

export const CardProductPrice = styled.p`
  color: var(--color-secondary);
  font-size: 1.8rem;
  font-weight: 700;
`;

export const CardProductImage = styled.img`
  height: 10rem;
  margin: auto;
`;

export const CardPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
