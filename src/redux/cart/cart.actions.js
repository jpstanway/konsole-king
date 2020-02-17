import { CartActionTypes } from "./cart.types";

export const addItem = (item, quantity = 1) => {
  return async dispatch => {
    dispatch({
      type: CartActionTypes.ADD_ITEM,
      payload: {
        item,
        quantity
      }
    });
  };
};

export const removeItem = item => {
  return async dispatch => {
    dispatch({
      type: CartActionTypes.REMOVE_ITEM,
      payload: item
    });
  };
};

export const resetCart = () => {
  return async dispatch => {
    dispatch({
      type: CartActionTypes.RESET_CART
    });
  };
};

export const updateTotal = cart => {
  return async dispatch => {
    dispatch({
      type: CartActionTypes.UPDATE_TOTAL,
      payload: cart
    });
  };
};
