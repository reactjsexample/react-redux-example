import * as actionType from "./XxxSearchBoxActionTypes";

const initialState = {
  isSearchDisabled: true,
  previousSearchText: null,
  searchText: ""
};

const searchBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_IS_SEARCH_DISABLED:
      return { ...state, isSearchDisabled: action.payload };
    case actionType.SET_PREVIOUS_SEARCH_TEXT:
      return { ...state, previousSearchText: action.payload };
    case actionType.SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

export { searchBoxReducer };
