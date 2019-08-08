import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import xxxAppReducer from "./xxxAppReducer";

const xxxAppStore = createStore(
  xxxAppReducer,
  /* preloadedState, */ devToolsEnhancer()
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
);

export default xxxAppStore;
