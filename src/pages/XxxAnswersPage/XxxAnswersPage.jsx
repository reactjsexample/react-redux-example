import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";

import {
  selectAnswers,
  selectIsEmpty,
  selectIsError,
  selectIsLoading,
  selectIsQuestions,
  selectQuestion
} from "./XxxAnswersPageReducer";
import {
  getAnswersFromUrl,
  getQuestionFromUrl
} from "../XxxAnswersPage/XxxAnswersPageActions";
import styles from "./XxxAnswersPage.module.scss";
import sharedStyles from "../../assets/styles/XxxSharedStyles.module.scss";

class XxxAnswersPage extends Component {
  // BEST PRACTICE: declare all private properties at the top
  questionId = "";
  requestUrl = "";
  requestParams = "";

  componentDidMount() {
    this.getQuestionId();
    this.getQuestion();
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen(() => {
      this.getQuestionId();
      this.getQuestion();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getQuestionId() {
    this.questionId = this.props.match.params.id;
  }

  async getQuestion() {
    this.setState({
      isEmpty: false,
      isError: false,
      isLoading: true
    });
    this.setState({ isError: false, isLoading: true });
    this.requestUrl =
      "https://api.stackexchange.com/2.2/questions/" + this.questionId;
    this.requestParams = {
      key: "U4DMV*8nvpm3EOpvf69Rxw((",
      site: "stackoverflow",
      filter: "withbody",
      order: "desc",
      sort: "votes"
    };
    const url = this.requestUrl + "?" + this.getQueryString(this.requestParams);
    await this.props.getQuestionFromUrl(url);
    this.getAnswers();
  }

  getAnswers() {
    this.requestUrl += "/answers";
    const url = this.requestUrl + "?" + this.getQueryString(this.requestParams);
    this.props.getAnswersFromUrl(url);
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

  timeToShortDate(time) {
    const date = new Date(time);
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    };
    return date.toLocaleDateString("en", options);
  }

  render() {
    let pageView = null;
    if (this.props.isLoading) {
      pageView = (
        <div className={sharedStyles.pageMessageContainer}>
          <CircularProgress />
        </div>
      );
    }
    if (this.props.isError) {
      pageView = (
        <div className={sharedStyles.pageMessageContainer}>
          <div className={sharedStyles.pageMessageError}>
            Error Occurred Getting Answers
          </div>
        </div>
      );
    }
    if (this.props.isEmpty) {
      pageView = (
        <div className={sharedStyles.pageMessageContainer}>
          <div className={sharedStyles.pageMessageWarning}>
            No Questions Found
          </div>
        </div>
      );
    }
    if (!(this.props.isEmpty || this.props.isError || this.props.isLoading)) {
      pageView = (
        <div className={styles.answersContainer}>
          {/*<div className="backToQuestions">*/}
          {/*  <a href="#">Back to Questions</a>*/}
          {/*</div>*/}
          <div className={styles.answerQuestionContainer}>
            <div className={styles.questionTitle}>
              {this.decodeHtmlEntities(this.props.question.title)}
            </div>
            <div>
              <span className={styles.questionCaption}>Number of Views: </span>
              <span className={styles.questionInfo}>
                {this.props.question.view_count}
              </span>
            </div>
            <div>
              <span className={styles.questionCaption}>Score: </span>
              <span className={styles.questionInfo}>
                {this.props.question.score}
              </span>
            </div>
            <div>
              <span className={styles.questionCaption}>Tags: </span>
              <span className={styles.questionInfo}>
                {this.props.question.tags.join()}
              </span>
            </div>
            <div>
              <span className={styles.questionCaption}>Asked: </span>
              <span className={styles.questionInfo}>
                {this.timeToShortDate(this.props.question.creation_date)}
              </span>
            </div>
            <div
              className={styles.questionBody}
              dangerouslySetInnerHTML={{ __html: this.props.question.body }}
            ></div>
          </div>
          {this.props.answers.map(item => (
            <div
              className={
                item.is_accepted
                  ? styles.answerAccepted
                  : styles.answerNotAccepted
              }
              key={item.answer_id}
            >
              <div>
                <span className={styles.answerCaption}>Score: </span>
                <span className={styles.answerInfo}>{item.score}</span>
              </div>
              <div>
                <span className={styles.answerCaption}>Answered: </span>
                <span className={styles.answerInfo}>
                  {this.timeToShortDate(item.creation_date)}
                </span>
              </div>
              <div className={styles.answerCaption}>Answer:</div>
              <div
                className={styles.answerBody}
                dangerouslySetInnerHTML={{ __html: item.body }}
              ></div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className={sharedStyles.page}>
        <div className={sharedStyles.pageTitle}>Stack Exchange Answers</div>
        <div className={sharedStyles.mainCard}>{pageView}</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getQuestionFromUrl,
  getAnswersFromUrl
};

const mapStateToProps = state => ({
  answers: selectAnswers(state),
  isEmpty: selectIsEmpty(state),
  isError: selectIsError(state),
  isLoading: selectIsLoading(state),
  isQuestions: selectIsQuestions(state),
  question: selectQuestion(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XxxAnswersPage);
