import { CartActionTypes } from "./cart.types";

export const addItem = (item, quantity = 1) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: {
    item,
    quantity
  }
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const updateTotal = cart => ({
  type: CartActionTypes.UPDATE_TOTAL,
  payload: cart
});
