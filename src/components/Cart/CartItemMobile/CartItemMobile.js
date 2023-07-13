import React, { useState } from "react";
import styles from "./CartItemMobile.module.scss";
import SelectedColor from "../SelectedColor/SelectedColor";
import ProductImage from "../../Product/ProductGalery/ProductImage";
import CartActions from "../CartActions/CartActions";
import { calcTotalPrice, formatPrice } from "../../../utils/utils";
import ProductQuantity from "../../Product/ProductQuantity/ProductQuantity";

const CartItemMobile = ({ product, handleUpdateCart }) => {
  const [quantity, setQuantity] = useState(product ? product.quantity : 1);

  const onQuantityChange = (type) => {
    switch (type) {
      case "+":
        setQuantity((prev) => {
          const result = prev + 1;
          handleUpdateCart(
            product,
            result,
            calcTotalPrice(result, product.price)
          );
          return result;
        });
        break;

      case "-":
        setQuantity((prev) => {
          if (prev > 1) {
            const result = prev - 1;
            handleUpdateCart(
              product,
              result,
              calcTotalPrice(result, product.price)
            );
            return result;
          }
          return prev;
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles["cart-items"]}>
      <div className={styles["item-container"]}>
        <div className={styles.section}>
          <ProductImage height={"104px"} productName={product.image} />
          <div className={styles["product-info"]}>
            <div className={styles.name}>{product.name}</div>
            <div className={styles["label-value"]}>
              <span className={styles.label}>Price:</span>
              <span className={styles.value}>
                {formatPrice(product.price, "EUR")}
              </span>
            </div>
            <div className={styles["label-value"]}>
              <span className={styles.label}>Size:</span>
              <span className={styles.value}>{product.size}</span>
            </div>
            <div className={styles["label-value"]}>
              <span className={styles.label}>Color:</span>
              <span>
                <SelectedColor color={product.color} />
              </span>
            </div>
          </div>
          <CartActions product={product} />
        </div>
        <div className={styles.section}>
          <div className={styles.quantity}>
            <span>QUANTITY</span>
            <ProductQuantity
              onQuantityChange={onQuantityChange}
              quantity={quantity}
            />
          </div>
          <div className={`${styles["label-value"]} ${styles.alignment}`}>
            <span className={`${styles.label} ${styles["price-label"]}`}>
              Total:
            </span>
            <span className={`${styles.value} ${styles["price-value"]}`}>
              {formatPrice(product.total, "EUR")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
