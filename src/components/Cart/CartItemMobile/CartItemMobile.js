import React, { useEffect } from "react";
import styles from "./CartItemMobile.module.scss";
import SelectedColor from "../SelectedColor/SelectedColor";
import ProductImage from "../../Product/ProductGalery/ProductImage";
import CartActions from "../CartActions/CartActions";
import useQuantity from "../../../hooks/useQuantity";
import { calcAndFormatTotalPrice } from "../../../utils/utils";

const CartItemMobile = ({ product, handleUpdateCart }) => {
  const { quantityComponent, quantity } = useQuantity(product);

  useEffect(() => {
    handleUpdateCart(
      product,
      quantity,
      calcAndFormatTotalPrice(quantity, product.price)
    );
  }, [quantity]);

  return (
    <div className={styles["cart-items"]}>
      <div className={styles["item-container"]}>
        <div className={styles.section}>
          <ProductImage
            width={"84px"}
            height={"104px"}
            productName={product.image}
          />
          <div className={styles["product-info"]}>
            <div className={styles.name}>{product.name}</div>
            <div className={styles["label-value"]}>
              <span className={styles.label}>Price:</span>
              <span className={styles.value}>{product.price} EUR</span>
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
            {quantityComponent}
          </div>
          <div className={`${styles["label-value"]} ${styles.alignment}`}>
            <span className={`${styles.label} ${styles["price-label"]}`}>
              Total:
            </span>
            <span className={`${styles.value} ${styles["price-value"]}`}>
              {product.total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
