import React, {Component} from 'react';
import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {withRouter} from 'react-router-dom';

import XxxAppStore from '../../XxxApp/xxxAppStore'
import styles from './XxxSearchBox.module.scss';

class XxxSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchDisabled: true,
      previousSearchText: null,
      searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var searchText = event.target.value;
    // since setState is asynchronous, use callback for anything that depends on knowing state after setting state
    this.setState({searchText: searchText}, () => {
      // it's ok to do setState in callback of setState
      // Best Practice: don't use this.state in setState, get state from the updater function
      this.setState((state) => {
        return {isSearchDisabled: ((state.searchText.length === 0) || (state.searchText === state.previousSearchText))}
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.isSearchButtonDisabled) {
      return;
    }

    // mapStateToProps(state) {
    //   const { todos } = state;
    //   return { todoList: todos.allIds };
    // }

    this.setState({
      isSearchDisabled: true,
      previousSearchText: this.state.searchText
    });
    // set search text as parameter in url and navigate to the page that will do the search
    this.props.history.push(
        {
          pathname: '/questions',
          search: '?title=' + encodeURIComponent(this.state.searchText)
        });
  }

  render() {
    return (
        <div>
          <form className={styles.searchBox} onSubmit={this.handleSubmit}>
            <input autoFocus type="search" value={this.state.searchText} onChange={this.handleChange}/>
            <IconButton aria-label="search" disabled={this.state.isSearchButtonDisabled}
                        color="primary"
                        onClick={this.handleSubmit}>
              <SearchIcon/>
            </IconButton>
          </form>
        </div>
    );
  }
}

// HOC Higher Order Component wraps our component
// withRouter allows us to use history to navigate programmatically
export default withRouter(XxxSearchBox);
