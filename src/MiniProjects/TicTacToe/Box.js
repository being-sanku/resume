import React from "react";
import styles from "./Box.module.css";
function Box(props) {
  //   console.log(props);
  const onClickHandler = props.onClick;
  const { left, right, bottom, top } = { ...props };
  const line = "2px dotted aqua";
  const data = props.data;

  return (
    // <div>
    <div
      onClick={onClickHandler}
      className={styles.box}
      style={{
        borderLeft: left ? line : "",
        borderRight: right ? line : "",
        borderBottom: bottom ? line : "",
        borderTop: top ? line : "",
        color: "white",
        textAlign: "center",

        // backgroundColor: data == -1 ? "" : data == 0 ? "red" : "blue",
      }}
    >
      <p style={{ padding: "10%", fontSize: "20px" }}>
        {" "}
        {data == -1 ? " " : data == 0 ? "X" : "O"}
      </p>
    </div>
  );
}

export default Box;
