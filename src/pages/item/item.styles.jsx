import styled from "styled-components";
import { device } from "../../scripts/media";

export const ItemPage = styled.div`
  display: grid;
  grid-template-columns: minmax(30rem, 50rem) 1fr;
  grid-template-rows: 50rem 1fr;
  grid-gap: 2rem;
  padding-bottom: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
  }
`;

export const ItemImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 100%;
`;

export const ItemPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ItemAvailability = styled.p`
  color: var(--color-grey-dark);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  span {
    color: var(--color-tertiary);
  }
`;

export const ItemName = styled.h2`
  color: var(--color-grey-dark);
`;

export const ItemBrand = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-grey-dark);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  width: 100%;
`;

export const ItemSummary = styled.p`
  color: var(--color-grey-dark);
  margin: 2rem 0;
`;

export const ItemPrice = styled.h1`
  color: var(--color-secondary);
  margin: 2rem 0;
  font-size: 4.2rem;
`;

export const ItemCartControls = styled.div`
  display: flex;
  height: 6rem;

  & > button {
    margin-left: 2rem;
  }
`;

export const ItemSpecifications = styled.div`
  grid-column: 1 / -1;
`;
