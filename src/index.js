import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import XxxApp from "./XxxApp/XxxApp";
import xxxAppStore from "./XxxApp/xxxAppStore";
import "./index.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={xxxAppStore}>
    <XxxApp />
  </Provider>,
  rootElement
);
