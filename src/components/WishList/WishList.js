import React, { useContext } from "react";
import { WishListContext } from "../../contexts/save/WishListContextProvider";
import styles from "./WishList.module.scss";
import WishListItem from "./WishListItem/WishListItem";
import NoData from "../NoData/NoData";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart/CartContextProvider";
import { isProductInWishListExists } from "../../utils/utils";

const WishList = () => {
  const { wishList, updateWishList, clearWishList, removeWishList } =
    useContext(WishListContext);
  const { cart } = useContext(CartContext);
  const { updateCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    updateCart({ ...product });
    removeWishList({ ...product });
  };

  const navigate = useNavigate();

  const handleUpdateWishlist = (product) => {
    updateWishList({ ...product });
  };

  const handleContinueShopping = () => {
    navigate("/catalog");
  };

  const handleClearWishList = () => {
    clearWishList();
  };

  const handleAddAllToCart = () => {
    for (let i = 0; i < wishList.length; i++) {
      updateCart({ ...wishList[i] });
    }
    clearWishList();
    navigate("/cart");
  };

  const action = (
    <button onClick={handleContinueShopping} className={styles.action}>
      CONTINUE SHOPPING
    </button>
  );

  if (!wishList || (wishList && wishList.length === 0)) {
    return (
      <>
        <NoData text={"Wish list is empty"} action={action} />
      </>
    );
  }

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
              handleAddToCart={handleAddToCart}
              isWishListExist={isProductInWishListExists(cart, item.id)}
            />
          ))}
        </div>
        <div className={styles.actions}>
          <button onClick={handleContinueShopping} className={styles.action}>
            GO TO CATALOG
          </button>
          <button className={styles.action} onClick={handleClearWishList}>
            CLEAR WISH LIST
          </button>
          <button onClick={handleAddAllToCart} className={styles.action}>
            ADD ALL TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default WishList;
