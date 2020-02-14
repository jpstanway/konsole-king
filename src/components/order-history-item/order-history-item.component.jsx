import React from "react";

import {} from "./order-history.item.styles";

import ProductCard from "../product-card/product-card.component";

const OrderHistoryItem = ({ order }) => {
  const createdAt = new Date(order.createdAt.toDate());
  return (
    <div>
      <h3>{createdAt.toLocaleDateString()}</h3>
      {order.order.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
      <p>Order Total: ${order.total / 100}</p>
    </div>
  );
};

export default OrderHistoryItem;
