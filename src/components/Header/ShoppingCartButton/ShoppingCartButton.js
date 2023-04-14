import React, { useContext } from "react";
import CartIcon from "../../UI/icons/CartIcon";
import styles from "./ShoppingCartButton.module.scss";
import { CartContext } from "../../../contexts/cart/CartContextProvider";
import { useNavigate } from "react-router-dom";

const ShoppingCartButton = (props) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/cart");
  };

  return (
    <button onClick={handleNavigation} className={styles.button}>
      <span>
        <CartIcon />
      </span>
      {cart && cart.length > 0 && (
        <span className={styles.badge}>{cart.length}</span>
      )}
    </button>
  );
};

export default ShoppingCartButton;
