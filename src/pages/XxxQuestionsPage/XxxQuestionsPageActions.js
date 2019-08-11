import * as actionTypes from "./XxxQuestionsPageActionTypes";

export const setCurrentPage = data => ({
  type: actionTypes.SET_CURRENT_PAGE,
  payload: data
});

export const setIsEmpty = data => ({
  type: actionTypes.SET_IS_EMPTY,
  payload: data
});

export const setIsError = data => ({
  type: actionTypes.SET_IS_ERROR,
  payload: data
});

export const setIsLoading = data => ({
  type: actionTypes.SET_IS_LOADING,
  payload: data
});

export const setIsMore = data => ({
  type: actionTypes.SET_IS_MORE,
  payload: data
});

export const setIsQuestions = data => ({
  type: actionTypes.SET_IS_QUESTIONS,
  payload: data
});

export const setQuestions = data => ({
  type: actionTypes.SET_QUESTIONS,
  payload: data
});
