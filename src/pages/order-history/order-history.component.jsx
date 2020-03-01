import React from "react";
import PropTypes from "prop-types";

import { OrderHistoryPage, OrderHistoryTitle } from "./order-history.styles";

import OrderHistoryItem from "../../components/order-history-item/order-history-item.component";

const OrderHistory = ({ currentUser }) => (
  <OrderHistoryPage>
    <OrderHistoryTitle>Order History</OrderHistoryTitle>
    {currentUser.orderHistory && currentUser.orderHistory.length > 0 ? (
      currentUser.orderHistory
        .sort((a, b) => {
          const dateA = new Date(a.createdAt.toDate());
          const dateB = new Date(b.createdAt.toDate());
          return dateB - dateA;
        })
        .map(order => <OrderHistoryItem key={order.id} order={order} />)
    ) : (
      <p>Your order history is empty</p>
    )}
  </OrderHistoryPage>
);

OrderHistory.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default OrderHistory;
