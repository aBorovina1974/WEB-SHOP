import React from "react";
import styles from "./CartActions.module.scss";
import CartWishlistIcon from "../../../components/UI/icons/CartWishListIcon";
import CartPencilIcon from "../../../components/UI/icons/CartPencilIcon";
import CartCloseIcon from "../../../components/UI/icons/CartCloseIcon";

const CartActions = () => {
  return (
    <div className={styles.container}>
      <button className={styles.action}>
        <CartWishlistIcon />
      </button>
      <button className={styles.action}>
        <CartPencilIcon />
      </button>
      <button className={styles.action}>
        <CartCloseIcon />
      </button>
    </div>
  );
};

export default CartActions;
