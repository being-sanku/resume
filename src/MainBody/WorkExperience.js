import React from "react";
import styles from "./WorkExperience.module.css";
const details = [
  {
    designation: "Sr. Digital Engineer",
    companyName: "Tata Digital / Tata Neu",
    companyDescription:
      "Integrating the Tata group’s most trusted brands all into a single superapp, Tata Neu offers exclusive privileges and benefits across categories.",
    responsibilities: [
      `Developed the front-end of MetaData tool using React to automate the
    generation of ETL. Designed and implemented responsive user
    interfaces, enhancing the user experience and promoting efficient
    interaction with the ETL automation tool.`,
      `Designed and implemented a efficient UI-based application for
    maintaining mapping of event flows from source events hub to
    multiple destination Event Hubs, streamlining the process of easily
    accepting the new event types.`,
      `Enhanced and enriched the frontend of the Loyalty section within the
    Tata Neu`,
      `Designed and implemented data flows utilizing Apache Nifi tool
    across multiple Tata brands, incorporating ETL (Extract, Transform,
    Load) processes and efficient data ingestion through Event Hubs.`,
    ],
  },
  {
    designation: "IT Intern",
    companyName: "Brainbees Solution (firstcry.com)",
    companyDescription: `Firstcry.com is a one stop shopping destination for parents for baby
    products`,
    responsibilities: [
      `Developed the user interface for the chatbot functionality
    on the Firstcry website, as part of an intern project`,
    ],
  },
];
function WorkExperience(props) {
  return (
    <div className={styles.WorkExperienceContainer}>
      <h1 className={styles.title}>WORK EXPERIENCE</h1>
      {details.map((item) => {
        return (
          <div key={item.companyName}>
            <h2 className={styles.designation}>{item.designation}</h2>
            <h2 className={styles.companyName}>{item.companyName}</h2>

            {/* <div className={styles.spantime}>
              <h3>time Span</h3>
              <h3>total years</h3>
            </div> */}
            <h3 className={styles.companyDescription}>
              {item.companyDescription}
            </h3>
            <div className={styles.responsibilities}>
              <ul>
                {item.responsibilities.map((responsibility) => {
                  return (
                    <li key={responsibility}>
                      <p className={styles.responsibilites}>{responsibility}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkExperience;
