import React from "react";
import styles from "./Card.module.css";
function Card(props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
