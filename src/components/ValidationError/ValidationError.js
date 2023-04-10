import React from "react";
import styles from "./ValidationError.module.scss";
import ErrorIcon from "../UI/icons/ErrorIcon";

const ValidationError = ({ error, classValidation }) => {
  if (!error) return null;

  return (
    <div className={classValidation ?? styles["validation-info"]}>
      <span className={styles.message}>{error}</span>
      <span>
        <ErrorIcon />
      </span>
    </div>
  );
};

export default ValidationError;
