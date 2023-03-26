import React from "react";
import CheckedIcon from "../../UI/icons/CheckedIcon";
import styles from "./Advertising.module.scss";

const Advertising = () => {
  const infoItems = [
    "Duties and Taxes Guaranteed",
    "Free Express Shipping",
    "Customer Love",
    "Easy Returns",
    "Secure Payment",
  ];

  return (
    <ul className={styles.items}>
      {infoItems.map((item, index) => (
        <li key={index} className={styles.item}>
          <CheckedIcon />
          <span className={styles.text}>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default Advertising;
