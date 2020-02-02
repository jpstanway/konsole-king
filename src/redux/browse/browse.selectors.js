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

      if (filterValue.filter) {
        // select by filter value
        title = filterValue.filter;
        items = items.filter(item => item.consoleType === filterValue.filter);
      } else if (filterValue.brand) {
        // select by brand value
        const categoryKeys = Object.keys(categories);

        title = filterValue.brand;
        items = categoryKeys.reduce((acc, curr) => {
          return acc.concat(
            categories[curr].items.filter(
              item =>
                item.company.toLowerCase() === filterValue.brand.toLowerCase()
            )
          );
        }, []);
      }

      return {
        title,
        items
      };
    } else {
      return null;
    }
  });
