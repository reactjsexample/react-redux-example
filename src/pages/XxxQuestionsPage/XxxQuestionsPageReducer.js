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
      return {
        ...state,
        currentPage: action.payload.currentPage,
        isEmpty: action.payload.isEmpty,
        isError: false,
        isLoading: false,
        isMore: action.payload.isMore,
        questions: action.payload.questions
      };
    default:
      return state;
  }
};

export { questionsPageReducer };
