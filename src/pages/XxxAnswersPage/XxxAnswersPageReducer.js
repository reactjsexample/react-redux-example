import * as actionType from "./XxxAnswersPageActionTypes";

const initialState = {
  answers: [],
  isEmpty: false,
  isError: false,
  isLoading: true,
  question: {}
};

const answersPageReducer = (state = initialState, action) => {
  let isEmpty = false;
  switch (action.type) {
    case actionType.FETCH_ANSWERS:
      return {
        ...state,
        answers: [],
        isEmpty: false,
        isError: false,
        isLoading: true
      };
    case actionType.FETCH_ANSWERS_FAILURE:
      return {
        ...state,
        answers: [],
        isEmpty: false,
        isError: true,
        isLoading: false
      };
    case actionType.FETCH_ANSWERS_SUCCESS:
      isEmpty =
        !action.payload.data.hasOwnProperty("items") ||
        !(
          Array.isArray(action.payload.data.items) &&
          action.payload.data.items.length > 0
        );
      return {
        ...state,
        answers: !isEmpty ? action.payload.data.items : [],
        isEmpty: isEmpty,
        isError: false,
        isLoading: false
      };
    case actionType.FETCH_QUESTION:
      return {
        ...state,
        isEmpty: false,
        isError: false,
        isLoading: true,
        isMore: false,
        question: {}
      };
    case actionType.FETCH_QUESTION_FAILURE:
      return {
        ...state,
        isEmpty: false,
        isError: true,
        isLoading: false,
        isMore: false,
        question: {}
      };
    case actionType.FETCH_QUESTION_SUCCESS:
      isEmpty =
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
        question: !isEmpty ? action.payload.data.items[0] : {}
      };
    default:
      return state;
  }
};

export { answersPageReducer };

// Redux selectors
export const selectAnswers = state => state.answersPage.answers;
export const selectIsEmpty = state => state.answersPage.isEmpty;
export const selectIsError = state => state.answersPage.isError;
export const selectIsLoading = state => state.answersPage.isLoading;
export const selectIsQuestions = state => state.questionsPage.isQuestions;
export const selectQuestion = state => state.answersPage.question;
