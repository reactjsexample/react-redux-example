import * as actions from "./XxxQuestionsPageActionTypes";

const initialState = {
  questionsCurrentPage: "",
  isQuestionsEmpty: false,
  isQuestionsError: false,
  isQuestionsLoading: true,
  isQuestionsMorePages: false,
  questions: []
};

function xxxQuestionsPageReducer(state = initialState, action) {
  switch (action.type) {
    case actions.XXX_GET_QUESTIONS:
      return { ...state, questions: action.questions };
    default:
      return state;
  }
}

export default xxxQuestionsPageReducer;
