import React from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../UI/buttons/ActionButton/ActionButton";
import styles from "./OfferItem.module.scss";

const OfferItem = (props) => {
  const navigate = useNavigate();

  const image = (
    <img
      className={styles.image}
      src={props.content.image}
      alt="Not available"
    />
  );

  const onClickHandler = () => {
    navigate("/catalog");
  };

  const info = (
    <div className={styles.info}>
      <p
        className={`${styles.title} ${
          props.content.type === "big" ? styles.discount : ""
        }`}
      >
        {props.content.title}
      </p>
      <p className={styles.subtitle}>{props.content.subtitle}</p>
      <ActionButton onClick={onClickHandler}>
        {props.content.action}
      </ActionButton>
    </div>
  );

  return (
    <div
      className={styles.offer}
      style={{ backgroundColor: props.content.backgroundColor }}
    >
      <div
        className={`${styles.content} ${
          props.content.type !== "small"
            ? props.content.imgSide === "left"
              ? styles.bigger
              : styles.smaller
            : ""
        }`}
      >
        {props.content.imgSide === "left" ? image : info}
      </div>
      <div
        className={`${styles.content} ${
          props.content.type !== "small"
            ? props.content.imgSide !== "left"
              ? styles.bigger
              : styles.smaller
            : ""
        }`}
      >
        {props.content.imgSide !== "left" ? image : info}
      </div>
    </div>
  );
};

export default OfferItem;
