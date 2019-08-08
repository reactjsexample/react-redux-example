import * as actions from "./XxxSearchBoxActionTypes";

const initialState = {
  searchText: ""
};

function xxxSearchBoxReducer(state = initialState, action) {
  switch (action.type) {
    case actions.XXX_SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    default:
      return state;
  }
}

export default xxxSearchBoxReducer();
