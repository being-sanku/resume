import React from "react";
import Education from "./EducationSkills/Education";
import WorkExperience from "./WorkExperience";
import styles from "./MainBody.module.css";
import ResearchPaper from "./ResearchPaper";
import Projects from "../Projects";
function MainBody(props) {
  return (
    <div className={styles.SubContainer}>
      <WorkExperience />
      <Education />
      <Projects />
      <ResearchPaper />
    </div>
  );
}

export default MainBody;
