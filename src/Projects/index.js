import React from "react";
import Card from "../Components/Card";
import styles from "./Projects.module.css";
const projects = [
  {
    title: "Data Pipeline Assistance",
    description: `A web UI based application that handles the mapping between
    source and destination of Pipelines made using event hub. Also
    facilitate automatic Pipeline Code generation of well known use
    cases`,
  },
  {
    title: "MetaData Tool",
    description: `A Web based tool which facilitated generation of ETL code for Data Warehouse.
    `,
  },
  {
    title: "Coep Hostel Admission Portal",
    description: `Contributed to a user-friendly web portal for Coep Hostel, streamlining the admission process and introducing an improved
    room allocation system`,
  },
  {
    title: "CoEP’s Zest’19 Sports fest Website",
    description: `https://www.coepzest.org is a site that represents Zest’19 which is
    in top 5 college sports fest in India`,
  },
];

function Projects(props) {
  return (
    <div>
      <h1 className={styles.title}>PROJECTS</h1>
      <div className={styles.Container}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
