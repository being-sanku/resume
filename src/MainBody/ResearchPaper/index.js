import React from "react";
import styles from "./ResearchPaper.module.css";
function ResearchPaper(props) {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>RESEARCH PAPER </h1>
        <h2 className={styles.topic}>
          <ol>
            <li>
              Auto Tuning Of Hadoop and Spark Parameters (01/2020 - 06/2020)
            </li>
          </ol>
        </h2>
      </div>
      <div>
        <h1 className={styles.title}>CERTIFICATIONS </h1>
        <h2 className={styles.topic}>
          <ol>
            <li>
              React - The Complete Guide <br />
              (08/2020 - 10/2020)
            </li>
          </ol>
        </h2>
      </div>
      <div>
        <h1 className={styles.title}>ACHIEVEMENTS </h1>
        <h2 className={styles.topic}>
          <ol>
            <li>Smart India Hackathon 2020 Finalist </li>
            <li> Mindspark’18 Hackathon Runner Up </li>
            <li> Symbiosis Web Design Competition Winner</li>
          </ol>
        </h2>
      </div>
    </div>
  );
}

export default ResearchPaper;
