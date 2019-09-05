import * as actionTypes from "./XxxQuestionsPageActionTypes";

export const getQuestionsFromUrl = url => {
  return async dispatch => {
    try {
      dispatch(fetchQuestions());
      let response = await fetch(url);
      if (response.ok) {
        response = await response.json();
        dispatch(fetchQuestionsSuccess(response));
      } else {
        dispatch(fetchQuestionsFailure());
      }
      return response;
    } catch (e) {
      dispatch(fetchQuestionsFailure());
      return e;
    }
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
