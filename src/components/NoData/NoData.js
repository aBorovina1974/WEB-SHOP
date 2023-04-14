import React from "react";
import styles from "./NoData.module.scss";

const NoData = ({ text, action }) => {
  return (
    <div className={styles["no-data"]}>
      {text ?? "No Data Found"}
      {action}
    </div>
  );
};

export default NoData;
