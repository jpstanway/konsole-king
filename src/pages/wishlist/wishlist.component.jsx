import React from "react";
import PropTypes from "prop-types";

import { WishlistPage, WishlistTitle } from "./wishlist.styles";

import ProductCardAlt from "../../components/product-card-alt/product-card-alt.component";

const Wishlist = ({ currentUser }) => (
  <WishlistPage>
    <WishlistTitle>Wishlist</WishlistTitle>
    {currentUser.wishlist && currentUser.wishlist.length > 0 ? (
      currentUser.wishlist.map(item => (
        <ProductCardAlt key={item.id} item={item} categoryId={item.category} />
      ))
    ) : (
      <p>Your wishlist is empty</p>
    )}
  </WishlistPage>
);

Wishlist.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default Wishlist;
