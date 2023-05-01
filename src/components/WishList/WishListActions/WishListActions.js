import React, { useContext } from "react";
import styles from "./WishListActions.module.scss";
import CartCloseIcon from "../../UI/icons/CartCloseIcon";
import useMatchMedia from "../../../hooks/useMatchMedia";
import { WishListContext } from "../../../contexts/save/WishListContextProvider";

const WishListActions = ({ product }) => {
  const isMatchMedia = useMatchMedia(1024);
  const { removeFromWishList } = useContext(WishListContext);

  let widthHeight = {
    width: "20",
    height: "20",
  };

  if (isMatchMedia) {
    widthHeight.width = "24";
    widthHeight.height = "24";
  }

  const handleRemoveFromWishList = () => {
    removeFromWishList({ ...product });
  };

  return (
    <div className={styles.container}>
      <button className={styles.action} onClick={handleRemoveFromWishList}>
        <CartCloseIcon {...widthHeight} />
      </button>
    </div>
  );
};

export default WishListActions;
