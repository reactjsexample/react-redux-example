import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import xxxAppReducer from "./xxxAppReducer";

const xxxAppStore = createStore(
  xxxAppReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default xxxAppStore;
