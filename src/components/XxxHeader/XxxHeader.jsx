import React, { Component } from "react";

import reduxLogoWhite from "../../assets/images/redux-logo-white.svg";
import styles from "./XxxHeader.module.scss";
import XxxSearchBox from "../XxxSearchBox/XxxSearchBox";

class XxxHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <img src={reduxLogoWhite} className={styles.logo} alt="logo" />
        <div className={styles.headerTitle}>React Redux Example</div>
        <div className={styles.searchBoxContainer}>
          <XxxSearchBox />
        </div>
      </div>
    );
  }
}

export default XxxHeader;
