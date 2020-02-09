import { CartActionTypes } from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  updateCartTotal
} from "./cart.utils";

const initialState = {
  cartItems: [],
  cartTotal: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(
          state.cartItems,
          action.payload.item,
          action.payload.quantity
        )
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.UPDATE_TOTAL:
      return {
        ...state,
        cartTotal: updateCartTotal(action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
