import React from "react";
import { connect } from "react-redux";

import { OrderHistoryPage } from "./order-history.styles";

import ProductCard from "../../components/product-card/product-card.component";

const OrderHistory = ({ currentUser }) => (
  <OrderHistoryPage>
    <h1>Order History</h1>
    {currentUser.orderHistory && currentUser.orderHistory.length > 0 ? (
      currentUser.orderHistory.map(item => (
        <ProductCard key={item.id} item={item} />
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
