import * as actionType from "./XxxAnswersPageActionTypes";

const initialState = {
  answers: [],
  isEmpty: false,
  isError: false,
  isLoading: true,
  question: {}
};

const answersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_ANSWERS:
      return { ...state, answers: action.payload };
    case actionType.SET_IS_EMPTY:
      return { ...state, isEmpty: action.payload };
    case actionType.SET_IS_ERROR:
      return { ...state, isError: action.payload };
    case actionType.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case actionType.SET_QUESTION:
      return { ...state, question: action.payload };
    default:
      return state;
  }
};

export { answersPageReducer };
