import React, { Component } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { CircularProgress, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

import {
  selectCurrentPage,
  selectIsEmpty,
  selectIsError,
  selectIsLoading,
  selectIsMore,
  selectQuestions
} from "./XxxQuestionsPageReducer";
import { getQuestionsFromUrl } from "./XxxQuestionsPageActions";
import sharedStyles from "../../assets/styles/XxxSharedStyles.module.scss";
import styles from "./XxxQuestionsPage.module.scss";

class XxxQuestionsPage extends Component {
  pageBaseUrl = "/questions";
  requestedPage = "";
  title = "";

  constructor(props) {
    super(props);
    this.handleFirstPage = this.handleFirstPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
  }

  componentDidMount() {
    this.readUrlQueryString(this.props.location.search);
    this.getQuestions();
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen(location => {
      this.readUrlQueryString(location.search);
      this.getQuestions();
    });
  }

  readUrlQueryString(search) {
    const values = queryString.parse(search);
    this.title = values.title;
    this.requestedPage = values.page;
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getQuestions() {
    const baseUrl = "https://api.stackexchange.com/2.2/search/advanced";
    const requestParams = {
      key: "U4DMV*8nvpm3EOpvf69Rxw((",
      title: this.title || "",
      answers: "1",
      site: "stackoverflow",
      filter: "withbody",
      page: this.requestedPage || "1",
      order: "desc",
      sort: "votes"
    };
    const url = baseUrl + "?" + this.getQueryString(requestParams);
    this.props.getQuestionsFromUrl(url);
  }

  getQueryString(params) {
    return Object.keys(params)
      .map(
        key => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      )
      .join("&");
  }

  decodeHtmlEntities(text) {
    if (text === undefined || text === "") {
      return "";
    }
    var doc = new DOMParser().parseFromString(text, "text/html");
    var newText = doc.documentElement.textContent;
    newText = newText.replace("&quot;", '"');
    return newText;
  }

  handleFirstPage() {
    this.requestedPage = "1";
    this.navigateToPage();
  }

  handleNextPage(event) {
    this.requestedPage = (parseInt(this.props.currentPage, 10) + 1).toString();
    this.navigateToPage();
  }

  handlePreviousPage() {
    this.requestedPage = (parseInt(this.props.currentPage, 10) - 1).toString();
    this.navigateToPage();
  }

  navigateToPage() {
    const queryParams = {
      title: this.title,
      page: this.requestedPage
    };
    this.props.history.push(
      this.pageBaseUrl + "?" + this.getQueryString(queryParams)
    );
  }

  render() {
    let pageView = null;

    if (this.props.isLoading) {
      pageView = (
        <div className={sharedStyles.pageMessageContainer}>
          <CircularProgress />
        </div>
      );
    } else {
      if (this.props.isError) {
        pageView = (
          <div className={sharedStyles.pageMessageContainer}>
            <div className={sharedStyles.pageMessageError}>
              Error Occurred Getting Questions
            </div>
          </div>
        );
      } else {
        if (this.props.isEmpty) {
          pageView = (
            <div className={sharedStyles.pageMessageContainer}>
              <div className={sharedStyles.pageMessageWarning}>
                No Questions Found
              </div>
            </div>
          );
        } else if (typeof this.props.questions != "undefined") {
          pageView = (
            <div>
              <ul>
                {this.props.questions.map(item => (
                  <li key={item.question_id}>
                    <a
                      href={"/answers/" + item.question_id}
                      className={styles.dummy}
                      key={item.question_id}
                    >
                      {this.decodeHtmlEntities(item.title)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className={styles.pageFooter}>
                <div className={styles.pageNavigationPanel}>
                  <span>Page {this.props.currentPage}</span>
                  <IconButton
                    disabled={this.props.currentPage === "1"}
                    onClick={this.handleFirstPage}
                    href="#"
                    title="Go to First Page"
                  >
                    <FirstPageIcon />
                  </IconButton>
                  <IconButton
                    disabled={this.props.currentPage === "1"}
                    onClick={this.handlePreviousPage}
                    href="#"
                    title="Go to Previous Page"
                  >
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton
                    disabled={!this.props.isMorePages}
                    onClick={this.handleNextPage}
                    href="#"
                    title="Go to Next Page"
                  >
                    <ChevronRightIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        }
      }
    }

    return (
      <div className={sharedStyles.page}>
        <div className={sharedStyles.pageTitle}>Stack Exchange Questions</div>
        <div className={sharedStyles.mainCard}>{pageView}</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getQuestionsFromUrl
};

const mapStateToProps = state => ({
  currentPage: selectCurrentPage(state),
  isEmpty: selectIsEmpty(state),
  isError: selectIsError(state),
  isLoading: selectIsLoading(state),
  isMore: selectIsMore(state),
  questions: selectQuestions(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(XxxQuestionsPage)
);
