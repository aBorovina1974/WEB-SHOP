import React from "react";
import styles from "./MainImage.module.scss";
import mainImg from "../../assets/main_page_images/mainImg.png";

const MainImage = () => {
  return (
    <div className={styles.image}>
      <img src={mainImg} alt="MainImage" />
    </div>
  );
};

export default MainImage;
