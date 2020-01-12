import styled from "styled-components";
import { device } from "../../scripts/media";

export const ItemPage = styled.div`
  display: grid;
  grid-template-columns: minmax(30rem, 50rem) 1fr;
  grid-template-rows: 50rem 1fr;
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

export const ItemBrand = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-grey-dark);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  width: 100%;
`;

export const ItemSpecifications = styled.div`
  grid-column: 1 / -1;
`;
