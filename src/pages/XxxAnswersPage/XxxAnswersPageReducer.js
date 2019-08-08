import * as actions from "./XxxAnswersPageActionTypes";

const initialState = {
  answers: [],
  isAnswersEmpty: false,
  isAnswersError: false,
  isAnswersLoading: true,
  question: {}
};

function xxxAnswersPageReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ANSWERS:
      return { ...state, answers: action.answers };
    case actions.GET_QUESTION:
      return { ...state, question: action.question };
    case actions.SET_ANSWERS:
      return { ...state, answers: action.answers };
    default:
      return state;
  }
}

export default xxxAnswersPageReducer;
