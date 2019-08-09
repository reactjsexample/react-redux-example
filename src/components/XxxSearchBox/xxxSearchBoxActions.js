import * as actionType from "./XxxSearchBoxActionTypes";

const xxxSetIsSearchDisabled = payload => {
  return { type: actionType.SET_IS_SEARCH_DISABLED, payload };
};

const xxxSetPreviousSearchText = payload => {
  return { type: actionType.SET_PREVIOUS_SEARCH_TEXT, payload };
};

const xxxSetSearchText = payload => {
  return { type: actionType.SET_SEARCH_TEXT, payload };
};

export default {
  xxxSetIsSearchDisabled,
  xxxSetPreviousSearchText,
  xxxSetSearchText
};
