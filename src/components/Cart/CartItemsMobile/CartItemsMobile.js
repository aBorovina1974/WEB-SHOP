import React from "react";
import styles from "./CartItemsMobile.module.scss";
import SelectedColor from "../SelectedColor/SelectedColor";
import ProductQuantity from "../../Product/ProductQuantity/ProductQuantity";
import ProductImage from "../../Catalog/CatalogItem/ProductImage";
import CartActions from "../CartActions/CartActions";

const CartItemsMobile = (props) => {
  return (
    <div className={styles["cart-items"]}>
      <div className={styles["item-container"]}>
        <div className={styles.section}>
          <ProductImage
            width={"84px"}
            height={"104px"}
            productName={props.data.image}
          />
          <div className={styles["product-info"]}>
            <div className={styles.name}>{props.data.name}</div>
            <div className={styles["label-value"]}>
              <span className={styles.label}>Size:</span>
              <span className={styles.value}>{props.data.size}</span>
            </div>
            <div className={styles["label-value"]}>
              <span className={styles.label}>Color:</span>
              <span>
                <SelectedColor color={props.data.color} />
              </span>
            </div>
          </div>
          <CartActions />
        </div>
        <div className={styles.section}>
          <div className={styles.quantity}>
            <span>QUANTITY</span>
            <ProductQuantity prodQuantity={props.data.quantity} />
          </div>
          <div className={`${styles["label-value"]} ${styles.alignment}`}>
            <span className={`${styles.label} ${styles["price-label"]}`}>
              Price:
            </span>
            <span className={`${styles.value} ${styles["price-value"]}`}>
              {props.data.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsMobile;
