import styled from "styled-components";

export const CheckoutSummaryContainer = styled.div`
  border: 1px solid var(--color-grey-light);
  border-radius: 2px;
  height: 20rem;
  padding: 0.5rem 1rem;

  .final-total {
    color: var(--color-secondary);
  }
`;

export const CheckoutSummaryTitle = styled.h2`
  color: var(--color-grey-dark);
  border-bottom: 1px solid var(--color-grey);
  padding-bottom: 5px;
`;

export const CheckoutSummaryList = styled.ul`
  list-style-type: none;
  padding: 5px 0;
`;

export const CheckoutSummaryItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  margin: 5px 0px;
`;
