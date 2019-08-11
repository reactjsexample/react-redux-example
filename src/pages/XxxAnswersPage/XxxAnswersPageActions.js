import * as actionTypes from "./XxxAnswersPageActionTypes";

export const setAnswers = data => ({
  type: actionTypes.SET_ANSWERS,
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

export const setQuestion = data => ({
  type: actionTypes.SET_QUESTION,
  payload: data
});
