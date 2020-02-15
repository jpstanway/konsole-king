import React from "react";

import {
  OrderHistoryItemContainer,
  OrderHistoryTable,
  OrderHistoryImg,
  OrderHistoryTableRow,
  OrderHistoryCell,
  OrderTimeStamp,
  OrderTotal
} from "./order-history.item.styles";

const OrderHistoryItem = ({ order }) => {
  const createdAt = new Date(order.createdAt.toDate());
  return (
    <OrderHistoryItemContainer>
      <h4>
        Order Date:{" "}
        <OrderTimeStamp>{createdAt.toLocaleDateString()}</OrderTimeStamp>
      </h4>
      <OrderHistoryTable>
        <tbody>
          {order.order.map(item => (
            <OrderHistoryTableRow key={item.id}>
              <OrderHistoryCell>
                <OrderHistoryImg src={item.imageUrl} alt="product" />
              </OrderHistoryCell>
              <OrderHistoryCell>{item.item}</OrderHistoryCell>
              <OrderHistoryCell>{item.quantity}</OrderHistoryCell>
              <OrderHistoryCell>${item.price / 100}</OrderHistoryCell>
            </OrderHistoryTableRow>
          ))}
        </tbody>
      </OrderHistoryTable>
      <OrderTotal>
        <strong>Order Total: ${order.total / 100}</strong>
      </OrderTotal>
    </OrderHistoryItemContainer>
  );
};

export default OrderHistoryItem;
