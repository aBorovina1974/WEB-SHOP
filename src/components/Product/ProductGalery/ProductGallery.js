import React from "react";
import styles from "./ProductGallery.module.scss";
import ProductImage from "./ProductImage";

const ProductGallery = ({ productName }) => {
  return (
    <div className={styles["product__gallery-container"]}>
      <div className={styles.image}>
        <ProductImage productName={productName} />
      </div>
    </div>
  );
};

export default ProductGallery;
