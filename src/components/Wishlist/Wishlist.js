import React, { useContext } from "react";
import { WishListContext } from "../../contexts/save/WishListContextProvider";
import styles from "./WishList.module.scss";
import WishListItem from "./WishListItem/WishListItem";

const WishList = () => {
  const { wishList, updateWishList, removeWishList, clearWishList } =
    useContext(WishListContext);

  const handleUpdateWishlist = (product) => {
    updateWishList({ ...product });
  };

  return (
    <>
      <div className={styles.title}>
        <h3>My Wishlist</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.items}>
          {wishList.map((item) => (
            <WishListItem
              key={item.id}
              product={item}
              handleUpdateWishlist={handleUpdateWishlist}
            />
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.action}>SHARE WISH LIST</button>
          <button className={styles.action}>CLEAR WISH LIST</button>
          <button className={styles.action}>ADD ALL TO CART</button>
        </div>
      </div>
    </>
  );
};

export default WishList;
