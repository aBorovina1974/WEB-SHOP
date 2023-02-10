import React from "react";
import styles from "./MainImage.module.css";
import mainImg from "../../assets/mainImg.png";

const MainImage = () => {
  return (
    <div className={styles.image}>
      <img src={mainImg} alt="MainImage" />
    </div>
  );
};

export default MainImage;
