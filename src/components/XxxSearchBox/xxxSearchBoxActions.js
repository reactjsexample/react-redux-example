import * as actions from "./XxxSearchBoxActionTypes";

export function xxxGetIsSearchDisabled(payload) {
  return { type: actions.GET_IS_SEARCH_DISABLED, payload };
}

export function xxxGetPreviousSearchText(payload) {
  return { type: actions.GET_PREVIOUS_SEARCH_TEXT, payload };
}

export function xxxGetSearchText(payload) {
  return { type: actions.GET_SEARCH_TEXT, payload };
}

export function xxxSetIsSearchDisabled(payload) {
  return { type: actions.SET_IS_SEARCH_DISABLED, payload };
}

export function xxxSetPreviousSearchText(payload) {
  return { type: actions.SET_PREVIOUS_SEARCH_TEXT, payload };
}

export function xxxSetSearchText(payload) {
  return { type: actions.GET_SEARCH_TEXT, payload };
}
