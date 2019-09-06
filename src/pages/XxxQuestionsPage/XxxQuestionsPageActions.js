import * as actionTypes from "./XxxQuestionsPageActionTypes";

export const getQuestionsFromUrl = url => {
  let response = null;
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
    } catch {
      dispatch(fetchQuestionsFailure());
    }
    return response;
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

export const setCurrentPage = data => ({
  type: actionTypes.SET_CURRENT_PAGE,
  payload: { data }
});
