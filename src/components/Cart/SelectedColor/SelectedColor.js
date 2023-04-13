import React from "react";
import styles from "./SelectedColor.module.scss";

const SelectedColor = (props) => {
  return (
    <div className={styles.border}>
      <div
        className={styles.color}
        style={{ backgroundColor: props.color }}
      ></div>
    </div>
  );
};

export default SelectedColor;
