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
    case actionType.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case actionType.SET_IS_EMPTY:
      return { ...state, isEmpty: action.payload };
    case actionType.SET_IS_ERROR:
      return { ...state, isError: action.payload };
    case actionType.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case actionType.SET_IS_MORE:
      return { ...state, isMore: action.payload };
    case actionType.SET_IS_QUESTIONS:
      return { ...state, isQuestions: action.payload };
    case actionType.SET_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

export { questionsPageReducer };
