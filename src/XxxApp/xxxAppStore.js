import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import xxxAppReducer from "./xxxAppReducer";

const xxxAppStore = createStore(
  xxxAppReducer /* preloadedState, */ + window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default xxxAppStore;
