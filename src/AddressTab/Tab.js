import React from "react";
import styles from "./Tab.module.css";
function Tab(props) {
  return (
    <span className={styles.TabContainer} onClick={props.action}>
      <img src={props.logo} height="30" width="30" alt="contact" />

      <h4 className={styles.address}>{props.address}</h4>
    </span>
  );
}

export default Tab;
