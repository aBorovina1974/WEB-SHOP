import React from "react";
import CartIcon from "../../UI/icons/CartIcon";
import styles from "./ShoppingCartButton.module.css";

const ShoppingCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span>
        <CartIcon />
      </span>
      <span className={styles.badge}>4</span>
    </button>
  );
};

export default ShoppingCartButton;
