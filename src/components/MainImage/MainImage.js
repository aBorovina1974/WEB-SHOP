import React from "react";
import styles from "./MainImage.module.css";
import mainImg from "../../assets/mainImg.png";

const MainImage = (props) => {
  return (
    <div className={styles["main-image"]}>
      {props.children}
      <img src={mainImg} alt="A table full of delicious food" />
    </div>
  );
};

export default MainImage;
