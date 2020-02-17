import BrowseActionTypes from "./browse.types";

export const updateCategories = categoriesMap => {
  return async dispatch => {
    dispatch({
      type: BrowseActionTypes.UPDATE_CATEGORIES,
      payload: categoriesMap
    });
  };
};
