import React, { Component } from "react";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router-dom";

import styles from "./XxxSearchBox.module.scss";
import {
  setIsSearchDisabled,
  setPreviousSearchText,
  setSearchText
} from "./xxxSearchBoxActions";

class XxxSearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.setSearchText(event.target.value);
    setTimeout(() => {
      this.props.setIsSearchDisabled(
        this.props.searchText.length === 0 ||
          this.props.searchText === this.props.previousSearchText
      );
    }, 0);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.isSearchDisabled) {
      return;
    }
    this.props.setPreviousSearchText(this.props.searchText);
    this.props.setIsSearchDisabled(true);
    this.props.history.push({
      pathname: "/questions",
      search: "?title=" + encodeURIComponent(this.props.searchText)
    });
  }

  render() {
    return (
      <div>
        <form className={styles.searchBox} onSubmit={this.handleSubmit}>
          <input
            autoFocus
            type="search"
            value={this.props.searchText}
            onChange={this.handleChange}
          />
          <IconButton
            aria-label="search"
            disabled={this.props.isSearchDisabled}
            color="primary"
            href="#"
            onClick={this.handleSubmit}
          >
            <SearchIcon />
          </IconButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setIsSearchDisabled,
  setPreviousSearchText,
  setSearchText
};

const mapStateToProps = state => ({
  isSearchDisabled: state.searchBox.isSearchDisabled,
  previousSearchText: state.searchBox.previousSearchText,
  searchText: state.searchBox.searchText
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(XxxSearchBox)
);
