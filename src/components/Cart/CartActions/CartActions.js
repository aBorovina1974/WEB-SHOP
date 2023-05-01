import React, { useContext } from "react";
import styles from "./CartActions.module.scss";
import CartWishlistIcon from "../../../components/UI/icons/CartWishListIcon";
import CartCloseIcon from "../../../components/UI/icons/CartCloseIcon";
import { WishListContext } from "../../../contexts/save/WishListContextProvider";
import { CartContext } from "../../../contexts/cart/CartContextProvider";

const CartActions = ({ product }) => {
  const { updateWishList } = useContext(WishListContext);
  const { removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeFromCart({ ...product });
  };

  const handleAddToWishList = () => {
    updateWishList({ ...product });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleAddToWishList} className={styles.action}>
        <CartWishlistIcon />
      </button>
      <button onClick={handleRemoveFromCart} className={styles.action}>
        <CartCloseIcon />
      </button>
    </div>
  );
};

export default CartActions;
