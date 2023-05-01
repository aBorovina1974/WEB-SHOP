import React from "react";
import WishListActions from "../WishListActions/WishListActions";
import ProductImage from "../../Product/ProductGalery/ProductImage";
import styles from "./WishListItem.module.scss";
import useMatchMedia from "../../../hooks/useMatchMedia";

const WishListItem = ({ product, handleAddToCart, isWishListExist }) => {
  const isMatchMedia = useMatchMedia(1024);

  return (
    <div className={styles.container}>
      <div className={styles["product-actions"]}>
        <div className={styles.product}>
          <ProductImage
            height={isMatchMedia ? "215px" : "142px"}
            productName={product.image}
          />
          <h4>{product.name}</h4>
          <span>{`${product.price} EUR`}</span>
        </div>
        <WishListActions product={product} />
      </div>
      {!isWishListExist ? (
        <button
          className={styles["cart-button"]}
          onClick={() => handleAddToCart(product)}
        >
          ADD TO CART
        </button>
      ) : (
        <button
          className={styles["cart-button-disabled"]}
          onClick={() => handleAddToCart(product)}
          disabled
        >
          EXIST IN CART
        </button>
      )}
    </div>
  );
};

export default WishListItem;
