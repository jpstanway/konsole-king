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
export const selectCategory = categoryUrlParam =>
  createSelector([selectCategories], categories =>
    categories ? categories[categoryUrlParam] : null
  );

// // select items in category
// export const selectItem = (categoryUrlParam, itemUrlParam) =>
//   createSelector(
//     [selectCategory(categoryUrlParam)],
//     category => console.log(category),
//     category.items
//       ? category.items.find(item => item.id === itemUrlParam)
//       : null
//   );

// // select item by url parameter
// export const selectItem = itemUrlParam =>
//   createSelector([selectItems], items =>
//     items ? items.find(item => item.id === itemUrlParam) : null
//   );
