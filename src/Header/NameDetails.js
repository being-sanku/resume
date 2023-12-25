import React from "react";
import styles from "./NameDetails.module.css";
function NameDetails(props) {
  return (
    <div className={styles.NameDetails}>
      <h1 className={styles.Name}>Sanket Thakare</h1>
      <h2 className={styles.Designation}>Software Engineer</h2>
      <h3 className={styles.Description}>
        Looking for a suitable job role in Software Engineering and Development
        to utilize 3+ years of experience in UI development.
      </h3>
    </div>
  );
}

export default NameDetails;
