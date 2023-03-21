import React from "react";
import Button from "../../UI/buttons/Button";
import RightArrowIcon from "../../UI/icons/RightArrowIcon";
import LeftArrowIcon from "../../UI/icons/LeftArrowIcon";
import styles from "./SliderNavigation.module.scss";
const SliderNavigation = (props) => {
  return (
    <div className={styles.navigation}>
      <Button className={styles.button} onClick={props.slider.previous}>
        <LeftArrowIcon />
      </Button>
      <ul className={styles.indicators}>
        {props.slider.slides &&
          props.slider.slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === props.slider.active ? styles.active : ""
              }`}
              onClick={() => props.slider.set(index)}
            ></button>
          ))}
      </ul>
      <Button className={styles.button} onClick={props.slider.next}>
        <RightArrowIcon />
      </Button>
    </div>
  );
};

export default SliderNavigation;
