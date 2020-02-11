import styled from "styled-components";

export const CheckoutItemsTable = styled.table`
  border: 1px solid var(--color-grey-light);
  border-radius: 2px;
  width: 100%;
`;

export const CheckoutItemImg = styled.img`
  height: 3rem;
`;

export const CheckoutItemData = styled.td`
  padding: 1rem;

  button {
    margin-top: 0;
  }
`;
