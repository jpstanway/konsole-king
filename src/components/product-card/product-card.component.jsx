import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  CardContainer,
  CardInfoContainer,
  CardProductImage,
  CardProductLink,
  CardBrandName,
  CardDivider,
  CardProductPrice,
  CardPurchaseContainer
} from "./product-card.styles";

import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.actions";
import { showNotification } from "../../redux/notification/notification.actions";
import { updateUserWishlist } from "../../firebase/firebase.utils";

const ProductCard = ({
  item,
  categoryId,
  currentUser,
  addItem,
  showNotification
}) => {
  const handleAddToWishlist = item => {
    if (!currentUser) {
      showNotification("You must be logged in", true);
      return false;
    } else if (
      currentUser.wishlist.find(wishlistItem => item.id === wishlistItem.id)
    ) {
      showNotification("Item already added to wishlist", true);
      return false;
    }

    updateUserWishlist(currentUser.id, item);
    showNotification("Item added to wishlist");
  };

  return (
    <CardContainer>
      <CardInfoContainer>
        <CardProductImage src={item.imageUrl} alt="product" />
        <CardProductLink to={`/browse/${categoryId}/${item.id}`}>
          {item.item}
        </CardProductLink>
        <CardBrandName>{item.company}</CardBrandName>
        <CardDivider />
        <CardProductPrice>${Number(item.price) / 100}</CardProductPrice>
      </CardInfoContainer>
      <CardPurchaseContainer>
        <CustomButton onClick={() => addItem(item)}>Add To Cart</CustomButton>
        <CustomButton onClick={() => handleAddToWishlist(item)} btnLink>
          <i className="fas fa-heart"></i> Add To Wishlist
        </CustomButton>
      </CardPurchaseContainer>
    </CardContainer>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
  categoryId: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
  addItem: PropTypes.func.isRequired,
  showNotification: PropTypes.func
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { addItem, showNotification })(
  ProductCard
);
