import * as actionType from "./XxxSearchBoxActionTypes";

export const setIsSearchDisabled = data => ({
  type: actionType.SET_IS_SEARCH_DISABLED,
  payload: data
});

export const setPreviousSearchText = data => ({
  type: actionType.SET_PREVIOUS_SEARCH_TEXT,
  payload: data
});

export const setSearchText = data => ({
  type: actionType.SET_SEARCH_TEXT,
  payload: data
});
