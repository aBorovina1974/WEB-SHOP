import React from "react";
import styles from "./BrandItem.module.css";

const BrandItem = (props) => {
  return (
    <button className={styles.brand}>
      <img src={props.logo} alt="Brand" />
    </button>
  );
};

export default BrandItem;
