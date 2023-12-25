import React from "react";
import styles from "./Skills.module.css";
const skills = ["React", "JavaScript", "Java", "HTML/CSS"];
function Skills(props) {
  return (
    <div>
      <h1 className={styles.title}>Skills </h1>
      {skills.map((skill) => {
        return (
          <button key={skill} className={styles.skillButton}>
            {skill}
          </button>
        );
      })}
    </div>
  );
}

export default Skills;
