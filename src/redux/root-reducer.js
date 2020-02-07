import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import browseReducer from "./browse/browse.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  browse: browseReducer,
  cart: cartReducer
});

export default rootReducer;
