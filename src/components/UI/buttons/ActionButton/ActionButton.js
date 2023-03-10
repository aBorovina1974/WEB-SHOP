import React from "react";
import styles from "./ActionButton.module.scss";

const ActionButton = (props) => {
  return (
    <button
      className={styles.action}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
