import { combineReducers } from "redux";

import { xxxAnswersPageReducer as answersPage } from "../pages/XxxAnswersPage/XxxAnswersPageReducer";
import { xxxQuestionsPageReducer as questionsPage } from "../pages/XxxQuestionsPage/XxxQuestionsPageReducer";
import { xxxSearchBoxReducer as searchBox } from "../components/XxxSearchBox/XxxSearchBoxReducer";

const xxxAppReducer = combineReducers({
  answersPage,
  questionsPage,
  searchBox
});

export default xxxAppReducer;
