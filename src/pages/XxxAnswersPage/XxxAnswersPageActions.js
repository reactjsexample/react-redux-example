import * as actionTypes from "./XxxAnswersPageActionTypes";

export const getAnswersFromUrl = url => {
  return dispatch => {
    dispatch(fetchAnswers());
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(fetchAnswersSuccess(data)))
      .catch(() => dispatch(fetchAnswersFailure()));
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
  return dispatch => {
    dispatch(fetchQuestion());
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(fetchQuestionSuccess(data)))
      .catch(() => dispatch(fetchQuestionFailure()));
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
