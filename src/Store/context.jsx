import { createContext, useReducer } from 'react';

import { reducer } from './reducer';

const storeInitialState = {
  filteredCategories: [],
  filteredBrands: [],
  sortOrder: '',
  query: '',
};

export const StoreContext = createContext({
  state: storeInitialState,
  dispatch: () => {},
});

const StoreProvider = ({ children, initialState = storeInitialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreProvider };

export default StoreProvider;
