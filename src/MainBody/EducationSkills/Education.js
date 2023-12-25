import React from "react";
import styles from "./Education.module.css";
import Skills from "./Skills";
const details = [
  {
    education: "B.Tech in Information Technology",
    college: "College of Engineering Pune (COEP)",
    timespan: "08/2017 - 10/2020 ",
  },
  {
    education: "Diploma in Computer Engineering",
    college: "Government Polytechnic Pune (GPP)",
    timespan: "08/2014 - 06/2017 ",
  },
];
function Education(props) {
  return (
    <div className={styles.EducationContainer}>
      {" "}
      <div>
        <h1 className={styles.title}>EDUCATION</h1>
        {details.map((item) => {
          return (
            <div
              key={item.education}
              className={styles.singleEducationContainer}
            >
              <h1 className={styles.education}>{item.education}</h1>
              <h2 className={styles.college}>{item.college}</h2>
              <h3 className={styles.timespan}>{item.timespan}</h3>
            </div>
          );
        })}
      </div>
      <Skills />
    </div>
  );
}

export default Education;
