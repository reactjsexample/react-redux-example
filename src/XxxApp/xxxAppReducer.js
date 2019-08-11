import { combineReducers } from "redux";

import { answersPageReducer as answersPage } from "../pages/XxxAnswersPage/XxxAnswersPageReducer";
import { questionsPageReducer as questionsPage } from "../pages/XxxQuestionsPage/XxxQuestionsPageReducer";
import { searchBoxReducer as searchBox } from "../components/XxxSearchBox/XxxSearchBoxReducer";

const xxxAppReducer = combineReducers({
  answersPage,
  questionsPage,
  searchBox
});

export default xxxAppReducer;
