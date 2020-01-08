import { createSelector } from "reselect";

const selectBrowse = state => state.browse;

// select categories in browse collection
export const selectCategories = createSelector(
  [selectBrowse],
  browse => browse.categories
);

// generate array from each category for preview
export const selectCategoriesForPreview = createSelector(
  [selectCategories],
  categories =>
    categories ? Object.keys(categories).map(key => categories[key]) : []
);

// select category by url parameter
export const selectCategory = collectionUrlParam =>
  createSelector([selectCategories], categories =>
    categories ? categories[collectionUrlParam] : null
  );
