import styled from "styled-components";

export const OrderHistoryItemContainer = styled.div`
  margin-bottom: 3rem;
`;

export const OrderHistoryTable = styled.table`
  border: 1px solid var(--color-grey);
  border-collapse: collapse;
  border-radius: 2px;
  margin: 5px 0;
  width: 100%;
`;

export const OrderHistoryImg = styled.img`
  height: 5rem;
`;

export const OrderHistoryTableRow = styled.tr`
  border-radius: 2px;
`;

export const OrderHistoryCell = styled.td`
  padding: 1rem;
  text-align: center;
`;

export const OrderTimeStamp = styled.span`
  color: var(--color-grey);
`;

export const OrderTotal = styled.p`
  color: var(--color-grey-dark);
  font-size: 1.8rem;
  text-align: right;
`;
