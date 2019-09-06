import * as actionTypes from "./XxxAnswersPageActionTypes";

export const getAnswersFromUrl = url => {
  return async dispatch => {
    let response = null;
    try {
      dispatch(fetchAnswers());
      response = await fetch(url);
      if (response.ok) {
        response = await response.json();
        dispatch(fetchAnswersSuccess(response));
      } else {
        dispatch(fetchAnswersFailure());
      }
    } catch (e) {
      dispatch(fetchAnswersFailure());
    }
    return response;
  };
};

export const fetchAnswers = () => ({
  type: actionTypes.FETCH_ANSWERS
});

export const fetchAnswersFailure = () => ({
  type: actionTypes.FETCH_ANSWERS_FAILURE
});

export const fetchAnswersSuccess = data => ({
  type: actionTypes.FETCH_ANSWERS_SUCCESS,
  payload: { data }
});

export const getQuestionFromUrl = url => {
  let response = null;
  return async dispatch => {
    try {
      dispatch(fetchQuestion());
      let response = await fetch(url);
      if (response.ok) {
        response = await response.json();
        dispatch(fetchQuestionSuccess(response));
      } else {
        dispatch(fetchQuestionFailure());
      }
    } catch {
      dispatch(fetchQuestionFailure());
    }
    return response;
  };
};

export const fetchQuestion = () => ({
  type: actionTypes.FETCH_QUESTION
});

export const fetchQuestionFailure = () => ({
  type: actionTypes.FETCH_QUESTION_FAILURE
});

export const fetchQuestionSuccess = data => ({
  type: actionTypes.FETCH_QUESTION_SUCCESS,
  payload: { data }
});
