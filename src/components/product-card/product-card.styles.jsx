import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardPurchaseContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: none;
  padding: 2rem;
`;

export const CardContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
  height: auto;
  width: 100%;
  max-width: 27rem;
  margin-right: 5px;

  &:hover {
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  }

  &:hover ${CardPurchaseContainer} {
    display: block;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const CardProductImage = styled.img`
  height: 15rem;
  width: 100%;
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
