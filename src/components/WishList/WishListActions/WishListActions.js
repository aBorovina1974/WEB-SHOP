import React from "react";
import styles from "./WishListActions.module.scss";
import CartCloseIcon from "../../UI/icons/CartCloseIcon";
import CartPencilIcon from "../../UI/icons/CartPencilIcon";

const WishListActions = () => {
  return (
    <div className={styles.container}>
      <button className={styles.action}>
        <CartCloseIcon />
      </button>
      <button className={styles.action}>
        <CartPencilIcon />
      </button>
    </div>
  );
};

export default WishListActions;
