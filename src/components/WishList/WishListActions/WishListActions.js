import React, { useContext } from "react";
import styles from "./WishListActions.module.scss";
import CartCloseIcon from "../../UI/icons/CartCloseIcon";
import CartPencilIcon from "../../UI/icons/CartPencilIcon";
import useMatchMedia from "../../../hooks/useMatchMedia";
import { WishListContext } from "../../../contexts/save/WishListContextProvider";
import { useNavigate } from "react-router-dom";

const WishListActions = ({ product }) => {
  const isMatchMedia = useMatchMedia(1024);
  const navigate = useNavigate();
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

  const handleEditProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.action} onClick={handleRemoveFromWishList}>
        <CartCloseIcon {...widthHeight} />
      </button>
      <button className={styles.action} onClick={handleEditProduct}>
        <CartPencilIcon {...widthHeight} />
      </button>
    </div>
  );
};

export default WishListActions;
