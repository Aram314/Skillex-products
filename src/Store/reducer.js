export const Types = {
  SET_QUERY: 'SET_QUERY',
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_SORT_ORDER: 'SET_SORT_ORDER',
  SET_ACTIVE_PAGE: 'SET_ACTIVE_PAGE',
  SET_FILTERED_BRANDS: 'SET_FILTERED_BRANDS',
  SET_FILTERED_CATEGORIES: 'SET_FILTERED_CATEGORIES',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case Types.SET_ACTIVE_PAGE:
      return { ...state, activePageId: action.payload };
    case Types.SET_FILTERED_CATEGORIES:
      return { ...state, filteredCategories: action.payload };
    case Types.SET_FILTERED_BRANDS:
      return { ...state, filteredBrands: action.payload };
    case Types.SET_QUERY:
      return { ...state, query: action.payload };
    case Types.SET_SORT_ORDER:
      return { ...state, sortOrder: action.payload };
    default:
      return state;
  }
};
