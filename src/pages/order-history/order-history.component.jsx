import React from "react";
import { connect } from "react-redux";

import { OrderHistoryPage, OrderHistoryTitle } from "./order-history.styles";

import OrderHistoryItem from "../../components/order-history-item/order-history-item.component";

const OrderHistory = ({ currentUser }) => (
  <OrderHistoryPage>
    <OrderHistoryTitle>Order History</OrderHistoryTitle>
    {currentUser.orderHistory && currentUser.orderHistory.length > 0 ? (
      currentUser.orderHistory.map(order => (
        <OrderHistoryItem key={order.total} order={order} />
      ))
    ) : (
      <p>Your order history is empty</p>
    )}
  </OrderHistoryPage>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(OrderHistory);
