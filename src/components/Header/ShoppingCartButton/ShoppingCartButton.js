import React from "react";
import CartIcon from "../../UI/icons/CartIcon";
import styles from "./ShoppingCartButton.module.scss";

const ShoppingCartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span className={styles.badge}>4</span>
    </button>
  );
};

export default ShoppingCartButton;
