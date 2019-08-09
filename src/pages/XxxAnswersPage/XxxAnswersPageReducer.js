import * as actionType from "./XxxAnswersPageActionTypes";

const initialState = {
  answers: [],
  isAnswersEmpty: false,
  isAnswersError: false,
  isAnswersLoading: true,
  question: {}
};

const xxxAnswersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ANSWERS:
      return { ...state, answers: action.answers };
    case actionType.GET_QUESTION:
      return { ...state, question: action.question };
    case actionType.SET_ANSWERS:
      return { ...state, answers: action.answers };
    default:
      return state;
  }
};

export { xxxAnswersPageReducer };
