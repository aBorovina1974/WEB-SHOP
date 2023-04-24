import React, { useEffect } from "react";
import styles from "./MainImage.module.scss";
import mainImg from "../../assets/main_page_images/mainImg.png";
import { useLocation } from "react-router-dom";

const MainImage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.image}>
      <img src={mainImg} alt="MainImage" />
    </div>
  );
};

export default MainImage;
