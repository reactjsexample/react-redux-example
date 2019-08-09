import * as actionType from "./XxxQuestionsPageActionTypes";

const initialState = {
  questionsCurrentPage: "",
  isQuestionsEmpty: false,
  isQuestionsError: false,
  isQuestionsLoading: true,
  isQuestionsMorePages: false,
  questions: []
};

const xxxQuestionsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_QUESTIONS:
      return { ...state, questions: action.questions };
    default:
      return state;
  }
};

export { xxxQuestionsPageReducer };
