import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardPurchaseContainer = styled.div`
  background-color: var(--color-white);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: none;
  padding: 2rem;
  position: absolute;
  left: -1px;
  width: 27rem;
  z-index: 999;
`;

export const CardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 34rem;
  width: 27rem;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  &:hover ${CardPurchaseContainer} {
    display: block;
  }
`;

export const CardInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
`;

export const CardProductImage = styled.img`
  width: 100%;
  max-height: 18rem;
  margin: auto 0;
`;

export const CardProductLink = styled(Link)`
  font-size: 1.8rem;
  margin: 1rem 0rem;
`;

export const CardBrandName = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-grey-dark);
`;

export const CardDivider = styled.hr`
  border-color: rgba(0, 0, 0, 0.2);
  margin: 2rem auto;
  width: 100%;
`;

export const CardProductPrice = styled.p`
  color: var(--color-secondary);
  font-size: 1.8rem;
  font-weight: 700;
  text-align: right;
`;
