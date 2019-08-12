import * as actionTypes from "./XxxQuestionsPageActionTypes";

export const getQuestionsFromUrl = url => {
  return dispatch => {
    dispatch(fetchQuestions());
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(fetchQuestionsSuccess(data)))
      .catch(() => dispatch(fetchQuestionsFailure()));
  };
};

export const fetchQuestions = () => ({
  type: actionTypes.FETCH_QUESTIONS
});

export const fetchQuestionsFailure = data => ({
  type: actionTypes.FETCH_QUESTIONS_FAILURE
});

export const fetchQuestionsSuccess = data => ({
  type: actionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: { data }
});
