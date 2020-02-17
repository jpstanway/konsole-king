import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import browseReducer from "./browse/browse.reducer";
import cartReducer from "./cart/cart.reducer";
import notificationReducer from "./notification/notification.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  browse: browseReducer,
  cart: cartReducer,
  notification: notificationReducer
});

export default persistReducer(persistConfig, rootReducer);
