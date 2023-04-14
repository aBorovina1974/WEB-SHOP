import React from "react";
import styles from "./ProductQuantity.module.scss";

const ProductQuantity = ({ onQuantityChange, quantity = 1 }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => onQuantityChange("-")} className={styles.char}>
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={() => onQuantityChange("+")} className={styles.char}>
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
