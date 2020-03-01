import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  ItemPage,
  ItemImageContainer,
  ItemImage,
  ItemPurchaseContainer,
  ItemAvailability,
  ItemName,
  ItemBrand,
  ItemSummary,
  ItemPrice,
  ItemCartControls,
  ItemSpecifications
} from "./item.styles";

import { selectCategory } from "../../redux/browse/browse.selectors";
import { updateUserWishlist } from "../../firebase/firebase.utils";
import { addItem } from "../../redux/cart/cart.actions";
import { showNotification } from "../../redux/notification/notification.actions";

import CustomButton from "../../components/custom-button/custom-button.component";
import QuantitySelector from "../../components/quantity-selector/quantity-selector.component";
import TabbedContainer from "../../components/tabbed-container/tabbed-container.component";
import UserReviewForm from "../../components/user-review-form/user-review-form.component";

const Item = ({ match, category, currentUser, addItem, showNotification }) => {
  const [quantity, setQuantity] = useState(1);
  const item = category.items.find(
    item => Number(match.params.itemId) === item.id
  );

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
    <ItemPage>
      <ItemImageContainer>
        <ItemImage src={item.imageUrl} alt="item" />
      </ItemImageContainer>
      <ItemPurchaseContainer>
        <ItemAvailability>
          Availability: <span>In Stock</span>
        </ItemAvailability>
        <ItemName>{item.item}</ItemName>
        <ItemBrand>{item.company}</ItemBrand>
        <CustomButton onClick={() => handleAddToWishlist(item)} btnLink>
          <i className="fas fa-heart"></i> Add To Wishlist
        </CustomButton>
        <ItemSummary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis
          quod voluptate, explicabo cum at corrupti libero adipisci impedit
          itaque perferendis asperiores, soluta fugiat dolores.
        </ItemSummary>
        <ItemPrice>${Number(item.price) / 100}</ItemPrice>
        <ItemCartControls>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <CustomButton onClick={() => addItem(item, quantity)}>
            Add To Cart
          </CustomButton>
        </ItemCartControls>
      </ItemPurchaseContainer>
      <ItemSpecifications>
        <TabbedContainer item={item}>
          {currentUser ? (
            <UserReviewForm item={item} categoryName={category.title} />
          ) : (
            <p>
              You must be <Link to="/register-login">logged in</Link> to write a
              review
            </p>
          )}
        </TabbedContainer>
      </ItemSpecifications>
    </ItemPage>
  );
};

Item.propTypes = {
  category: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  addItem: PropTypes.func.isRequired,
  showNotification: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { addItem, showNotification })(Item);
