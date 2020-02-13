import React from "react";
import { connect } from "react-redux";

import {
  CheckoutItemsTable,
  CheckoutItemImg,
  CheckoutItemData
} from "./checkout-items.styles";

import CustomButton from "../custom-button/custom-button.component";

import { removeItem } from "../../redux/cart/cart.actions";

const CheckoutItems = ({ items, removeItem }) => (
  <CheckoutItemsTable>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <CheckoutItemData>
            <CheckoutItemImg src={item.imageUrl} alt="product" />
          </CheckoutItemData>
          <CheckoutItemData>{item.item}</CheckoutItemData>
          <CheckoutItemData>${item.price / 100}</CheckoutItemData>
          <CheckoutItemData>Quantity: x {item.quantity}</CheckoutItemData>
          <CheckoutItemData>
            <CustomButton onClick={() => removeItem(item)} btnLink>
              <i className="fas fa-window-close"></i> Remove
            </CustomButton>
          </CheckoutItemData>
        </tr>
      ))}
    </tbody>
  </CheckoutItemsTable>
);

export default connect(null, { removeItem })(CheckoutItems);
