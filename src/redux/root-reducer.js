import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import browseReducer from "./browse/browse.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  browse: browseReducer
});

export default rootReducer;
