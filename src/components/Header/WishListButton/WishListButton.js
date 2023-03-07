import React from "react";
import LikeIcon from "../../UI/icons/LikeIcon";
import styles from "./WishListButton.module.scss";
const WishListButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>
        <LikeIcon />
      </span>
      <span className={styles.badge}>5</span>
    </button>
  );
};

export default WishListButton;
