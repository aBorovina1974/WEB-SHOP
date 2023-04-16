import React, { useContext } from "react";
import styles from "./CartActions.module.scss";
import CartWishlistIcon from "../../../components/UI/icons/CartWishListIcon";
import CartPencilIcon from "../../../components/UI/icons/CartPencilIcon";
import CartCloseIcon from "../../../components/UI/icons/CartCloseIcon";
import { useNavigate } from "react-router-dom";
import { WishListContext } from "../../../contexts/save/WishListContextProvider";
import { CartContext } from "../../../contexts/cart/CartContextProvider";

const CartActions = ({ product }) => {
  const { updateWishList } = useContext(WishListContext);
  const { removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleEditProduct = () => {
    navigate(`/product/${product.id}`);
  };

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
      <button onClick={handleEditProduct} className={styles.action}>
        <CartPencilIcon />
      </button>
      <button onClick={handleRemoveFromCart} className={styles.action}>
        <CartCloseIcon />
      </button>
    </div>
  );
};

export default CartActions;
