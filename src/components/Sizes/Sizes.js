import React from "react";
import styles from "./Sizes.module.scss";

const Sizes = ({ sizes, onSizeChange }) => {
  return (
    <div className={styles.container}>
      {sizes.map((size) => (
        <div
          key={size.id}
          className={`
             ${styles["size-box"]} 
             ${size.selected ? styles["selected"] : styles["not-selected"]} 
             ${size.available === false ? styles["not-available"] : ""}
             `}
          onClick={size.available === true ? () => onSizeChange(size.id) : null}
        >
          <span className={styles.size}>{size.size}</span>
        </div>
      ))}
    </div>
  );
};

export default Sizes;
