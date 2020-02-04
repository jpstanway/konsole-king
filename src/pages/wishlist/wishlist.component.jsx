import React from "react";
import { connect } from "react-redux";

import { WishlistPage } from "./wishlist.styles";

import ProductCard from "../../components/product-card/product-card.component";

const Wishlist = ({ currentUser }) => (
  <WishlistPage>
    <h1>Wishlist</h1>
    {currentUser.wishlist && currentUser.wishlist.length > 0 ? (
      currentUser.wishlist.map(item => (
        <ProductCard key={item.id} item={item} />
      ))
    ) : (
      <p>Your wishlist is empty</p>
    )}
  </WishlistPage>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Wishlist);
