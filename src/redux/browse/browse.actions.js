import BrowseActionTypes from "./browse.types";

export const updateCategories = categoriesMap => ({
  type: BrowseActionTypes.UPDATE_CATEGORIES,
  payload: categoriesMap
});
