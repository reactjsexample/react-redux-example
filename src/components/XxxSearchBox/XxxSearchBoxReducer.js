import * as actions from "./XxxSearchBoxActionTypes";

const initialState = {
  isSearchDisabled: true,
  previousSearchText: null,
  searchText: ""
};

function xxxSearchBoxReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_IS_SEARCH_DISABLED:
      return { ...state, isSearchDisabled: action.previousSearchText };
    case actions.SET_PREVIOUS_SEARCH_TEXT:
      return { ...state, previousSearchText: action.previousSearchText };
    case actions.SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    default:
      return state;
  }
}

export default xxxSearchBoxReducer();
