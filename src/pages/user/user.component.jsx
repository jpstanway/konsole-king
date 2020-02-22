import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { UserPage } from "./user.styles";

import AccountOptions from "../../components/account-options/account-options.component";
import Wishlist from "../wishlist/wishlist.component";
import OrderHistory from "../order-history/order-history.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const WishlistWithSpinner = WithSpinner(Wishlist);
const OrderHistoryWithSpinner = WithSpinner(OrderHistory);

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    const { match } = this.props;

    return (
      <UserPage>
        <AccountOptions />
        <Route
          path={`${match.path}/wishlist`}
          render={props => (
            <WishlistWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/orders`}
          render={props => (
            <OrderHistoryWithSpinner isLoading={loading} {...props} />
          )}
        />
      </UserPage>
    );
  }
}

User.propTypes = {
  currentUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(User);
