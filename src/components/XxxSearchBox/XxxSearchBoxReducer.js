import * as actionType from "./XxxSearchBoxActionTypes";

const initialState = {
  isSearchDisabled: true,
  previousSearchText: null,
  searchText: ""
};

const xxxSearchBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_IS_SEARCH_DISABLED:
      return { ...state, isSearchDisabled: action.isSearchDisabled };
    case actionType.SET_PREVIOUS_SEARCH_TEXT:
      return { ...state, previousSearchText: action.previousSearchText };
    case actionType.SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    default:
      return state;
  }
};

export { xxxSearchBoxReducer };
