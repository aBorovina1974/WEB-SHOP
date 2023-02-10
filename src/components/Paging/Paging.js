import React from "react";
import Button from "../UI/buttons/Button";
import RightArrowIcon from "../UI/icons/RightArrowIcon";
import LeftArrowIcon from "../UI/icons/LeftArrowIcon";
import styles from "./Paging.module.css";
const Paging = () => {
  return (
    <div className={styles.paging}>
      <Button className={styles.button}>
        <LeftArrowIcon />
      </Button>
      <div className={styles.indicators}>
        <div></div>
        <div className={styles.active}></div>
        <div></div>
        <div></div>
      </div>
      <Button className={styles.button}>
        <RightArrowIcon />
      </Button>
    </div>
  );
};

export default Paging;
