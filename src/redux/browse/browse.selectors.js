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

// select all console categories with filter
export const selectCustomCategory = filterValue =>
  createSelector([selectCategories], categories => {
    if (categories) {
      let title = "All Consoles";
      let items = [
        ...categories["consoles"].items,
        ...categories["legacy"].items,
        ...categories["used"].items
      ];

      if (filterValue) {
        title = filterValue;
        items = items.filter(item => item.consoleType === filterValue);
      }

      return {
        title,
        items
      };
    } else {
      return null;
    }
  });
