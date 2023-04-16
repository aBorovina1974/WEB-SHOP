import React from "react";
import WishListActions from "../WishListActions/WishListActions";
import ProductImage from "../../Product/ProductGalery/ProductImage";
import styles from "./WishListItem.module.scss";

const WishListItem = ({ product, handleUpdateWishlist }) => {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <ProductImage height={"220px"} productName={product.image} />
        <h4>{product.name}</h4>
        <span>{product.price}</span>
        <button className={styles["cart-button"]}>ADD TO CART</button>
      </div>
      <WishListActions />
    </div>
  );
};

export default WishListItem;
