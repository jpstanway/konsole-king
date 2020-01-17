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

import CustomButton from "../../components/custom-button/custom-button.component";
import QuantitySelector from "../../components/quantity-selector/quantity-selector.component";
import TabbedContainer from "../../components/tabbed-container/tabbed-container.component";

const Item = ({ match, category }) => {
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
        <CustomButton btnLink>
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
        <TabbedContainer item={item} />
      </ItemSpecifications>
    </ItemPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Item);
