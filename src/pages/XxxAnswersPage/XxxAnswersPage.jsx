import React, {Component} from 'react';
import {CircularProgress} from '@material-ui/core';
import styles from './XxxAnswersPage.module.scss';
import sharedStyles from '../../assets/styles/XxxSharedStyles.module.scss';

class XxxAnswersPage extends Component {
  // BEST PRACTICE: declare all private properties at the top
  questionId = '';
  requestUrl = '';
  requestParams = '';

  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      isEmpty: false,
      isError: false,
      isLoading: true,
      question: {}
    };
  }

  componentDidMount() {
    this.getQuestionId();
    this.getQuestion();
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen(() => {
      console.log('url changed');
      this.getQuestionId();
      this.getQuestion();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getQuestionId() {
    this.questionId = this.props.match.params.id;
    console.log('this.questionId', this.questionId)
  }

  getQuestion() {
    this.setState({
      isEmpty: false,
      isError: false,
      isLoading: true
    });
    this.setState({isError: false, isLoading: true});
    this.requestUrl = 'https://api.stackexchange.com/2.2/questions/' + this.questionId;
    this.requestParams = {
      key: 'U4DMV*8nvpm3EOpvf69Rxw((',
      site: 'stackoverflow',
      filter: 'withbody',
      order: 'desc',
      sort: 'votes'
    };
    const url = this.requestUrl + '?' + this.getQueryString(this.requestParams);
    const thisRef = this;
    fetch(url)
        .then(
            function (response) {
              if (response.status !== 200) {
                thisRef.setState({
                  isError: true,
                  isLoading: false
                });
                return;
              }
              response.json().then((data) => {
                if (typeof data === 'object' && data.hasOwnProperty('items')
                    && Array.isArray(data.items) && data.items.length > 0) {
                  thisRef.setState({
                    question: data.items[0]
                  });
                  thisRef.getAnswers();
                } else {
                  thisRef.setState({
                    isEmpty: true,
                    isLoading: false
                  });
                }
              });
            }
        )
        .catch(function (err) {
          thisRef.setState({
            isError: true,
            isLoading: false
          });
        });
  }

  getAnswers() {
    this.requestUrl += '/answers';
    const url = this.requestUrl + '?' + this.getQueryString(this.requestParams);
    const thisRef = this;
    fetch(url)
        .then(
            function (response) {
              if (response.status !== 200) {
                thisRef.setState({
                  isError: true,
                  isLoading: false
                });
                return;
              }
              response.json().then((data) => {
                if (typeof data === 'object' && data.hasOwnProperty('items')
                    && Array.isArray(data.items) && data.items.length > 0) {
                  thisRef.setState({
                    answers: data.items,
                    isLoading: false
                  });
                } else {
                  thisRef.setState({
                    isEmpty: true,
                    isLoading: false
                  });
                }
              });
            }
        )
        .catch(function (err) {
          thisRef.setState({
            isError: true,
            isLoading: false
          });
        });
  }

  getQueryString(params) {
    return Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');
  }

  decodeHtmlEntities(text) {
    if ((text === undefined) || (text === '')) {
      return '';
    }
    var doc = new DOMParser().parseFromString(text, "text/html");
    var newText = doc.documentElement.textContent;
    newText = newText.replace('&quot;', '"');
    return newText;
  }

  timeToShortDate(time) {
    const date = new Date(time);
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
    };
    return date.toLocaleDateString('en', options);
  }

  render() {
    let pageView = null;
    if (this.state.isLoading) {
      pageView = <div className={sharedStyles.pageMessageContainer}><CircularProgress/></div>
    }
    if (this.state.isError) {
      pageView = <div className={sharedStyles.pageMessageContainer}>
        <div className={sharedStyles.pageMessageError}>Error Occurred Getting Questions</div>
      </div>
    }
    if (this.state.isEmpty) {
      pageView = <div className={sharedStyles.pageMessageContainer}>
        <div className={sharedStyles.pageMessageWarning}>No Questions Found</div>
      </div>
    }
    if (!(this.state.isEmpty || this.state.isError || this.state.isLoading)) {
      pageView =
          <div className={styles.answersContainer}>
            <div className={styles.answerQuestionContainer}>
              <div className={styles.questionTitle}>{this.decodeHtmlEntities(this.state.question.title)}</div>
              <div>
                <span className={styles.questionCaption}>Number of Views: </span>
                <span className={styles.questionInfo}>{this.state.question.view_count}</span>
              </div>
              <div>
                <span className={styles.questionCaption}>Score: </span>
                <span className={styles.questionInfo}>{this.state.question.score}</span>
              </div>
              <div><span className={styles.questionCaption}>Tags: </span>
                <span className={styles.questionInfo}>{this.state.question.tags.join()}</span>
              </div>
              <div>
                <span className={styles.questionCaption}>Asked: </span>
                <span className={styles.questionInfo}>{this.timeToShortDate(this.state.question.creation_date)}</span>
              </div>
              <div className={styles.questionBody} dangerouslySetInnerHTML={{__html: this.state.question.body}}></div>
            </div>
            {this.state.answers.map((item) => (
                <div className={item.is_accepted ? styles.answerAccepted: styles.answerNotAccepted} key={item.answer_id}>
                  <div>
                    <span className={styles.answerCaption}>Score: </span>
                    <span className={styles.answerInfo}>{item.score}</span>
                  </div>
                  <div><span className={styles.answerCaption}>Answered: </span>
                    <span className={styles.answerInfo}>{this.timeToShortDate(item.creation_date)}</span>
                  </div>
                  <div className={styles.answerCaption}>Answer:</div>
                  <div className={styles.answerBody} dangerouslySetInnerHTML={{__html: item.body}}></div>
                </div>
            ))}
          </div>
    }
    return (
        <div className={sharedStyles.page}>
          <div className={sharedStyles.pageTitle}>Stack Exchange Answers</div>
          <div className={sharedStyles.mainCard}>
            {pageView}
          </div>
        </div>
    );
  }
}

export default XxxAnswersPage;
