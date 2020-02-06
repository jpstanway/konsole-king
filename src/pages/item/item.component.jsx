import React from "react";
import { connect } from "react-redux";

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
import { updateOrderHistoryAndWishlist } from "../../firebase/firebase.utils";

import CustomButton from "../../components/custom-button/custom-button.component";
import QuantitySelector from "../../components/quantity-selector/quantity-selector.component";
import TabbedContainer from "../../components/tabbed-container/tabbed-container.component";
import UserReviewForm from "../../components/user-review-form/user-review-form.component";

const Item = ({ match, category, currentUser }) => {
  const item = category.items.find(
    item => Number(match.params.itemId) === item.id
  );

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
        <CustomButton
          onClick={() => updateOrderHistoryAndWishlist(currentUser.id, item)}
          btnLink
        >
          <i className="fas fa-heart"></i> Add To Wishlist
        </CustomButton>
        <ItemSummary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis
          quod voluptate, explicabo cum at corrupti libero adipisci impedit
          itaque perferendis asperiores, soluta fugiat dolores.
        </ItemSummary>
        <ItemPrice>${Number(item.price) / 100}</ItemPrice>
        <ItemCartControls>
          <QuantitySelector />
          <CustomButton>Add To Cart</CustomButton>
        </ItemCartControls>
      </ItemPurchaseContainer>
      <ItemSpecifications>
        <TabbedContainer item={item}>
          <UserReviewForm item={item} categoryName={category.title} />
        </TabbedContainer>
      </ItemSpecifications>
    </ItemPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Item);
