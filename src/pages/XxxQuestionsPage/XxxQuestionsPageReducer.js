import * as actionType from "./XxxQuestionsPageActionTypes";

const initialState = {
  currentPage: "",
  isEmpty: false,
  isError: false,
  isLoading: true,
  isMore: false,
  questions: []
};

const questionsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_QUESTIONS:
      return {
        ...state,
        isEmpty: false,
        isError: false,
        isLoading: true,
        isMore: false,
        questions: []
      };
    case actionType.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        isEmpty: false,
        isError: true,
        isLoading: false,
        isMore: false,
        questions: []
      };
    case actionType.FETCH_QUESTIONS_SUCCESS:
      let isEmpty =
        !action.payload.data.hasOwnProperty("items") ||
        !(
          Array.isArray(action.payload.data.items) &&
          action.payload.data.items.length > 0
        );
      return {
        ...state,
        isEmpty: isEmpty,
        isError: false,
        isLoading: false,
        isMore:
          action.payload.data.hasOwnProperty("has_more") &&
          action.payload.data.has_more,
        questions: !isEmpty ? action.payload.data.items : []
      };
    case actionType.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.data };
    default:
      return state;
  }
};

export { questionsPageReducer };

export const selectCurrentPage = state => state.questionsPage.currentPage;
export const selectIsEmpty = state => state.questionsPage.isEmpty;
export const selectIsError = state => state.questionsPage.isError;
export const selectIsLoading = state => state.questionsPage.isLoading;
export const selectIsMore = state => state.questionsPage.isMore;
export const selectQuestions = state => state.questionsPage.questions;
