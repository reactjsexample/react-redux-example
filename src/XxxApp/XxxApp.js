import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./XxxApp.module.scss";
import XxxAnswersPage from "../pages/XxxAnswersPage/XxxAnswersPage";
import XxxHeader from "../components/XxxHeader/XxxHeader";
import XxxHomePage from "../pages/XxxHomePage/XxxHomePage";
import XxxPageNotFoundPage from "../pages/XxxPageNotFoundPage/XxxPageNotFoundPage";
import XxxQuestionsPage from "../pages/XxxQuestionsPage/XxxQuestionsPage";

function XxxApp() {
  return (
    <div className={styles.xxxApp}>
      <Router>
        <XxxHeader />
        <div>
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={XxxHomePage}
            />
            <Route
              path={process.env.PUBLIC_URL + "/answers/:id"}
              component={XxxAnswersPage}
            />
            <Route
              path={process.env.PUBLIC_URL + "/questions"}
              component={XxxQuestionsPage}
            />
            <Route component={XxxPageNotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default XxxApp;
