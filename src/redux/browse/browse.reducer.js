import BrowseActionTypes from "./browse.types";

const initialState = {
  categories: null
};

const browseReducer = (state = initialState, action) => {
  switch (action.type) {
    case BrowseActionTypes.UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default browseReducer;
