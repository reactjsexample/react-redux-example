import * as actionTypes from "./XxxAnswersPageActionTypes";

export const getAnswersFromUrl = url => {
  return async dispatch => {
    try {
      dispatch(fetchAnswers());
      let response = await fetch(url);
      if (response.ok) {
        response = await response.json();
        dispatch(fetchAnswersSuccess(response));
      } else {
        dispatch(fetchAnswersFailure());
      }
      return response;
    } catch (e) {
      dispatch(fetchAnswersFailure());
    }
  };
};

export const fetchAnswers = () => ({
  type: actionTypes.FETCH_ANSWERS
});

export const fetchAnswersFailure = data => ({
  type: actionTypes.FETCH_ANSWERS_FAILURE
});

export const fetchAnswersSuccess = data => ({
  type: actionTypes.FETCH_ANSWERS_SUCCESS,
  payload: { data }
});

export const getQuestionFromUrl = url => {
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
      return response;
    } catch (e) {
      dispatch(fetchQuestionFailure());
      return e;
    }
  };
};

export const fetchQuestion = () => ({
  type: actionTypes.FETCH_QUESTION
});

export const fetchQuestionFailure = data => ({
  type: actionTypes.FETCH_QUESTION_FAILURE
});

export const fetchQuestionSuccess = data => ({
  type: actionTypes.FETCH_QUESTION_SUCCESS,
  payload: { data }
});
