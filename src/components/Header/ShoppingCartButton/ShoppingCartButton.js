import React, { useContext } from "react";
import { CartContext } from "../../../contexts/cart/CartContextProvider";
import { useNavigate } from "react-router-dom";
import CartIcon from "../../UI/icons/CartIcon";
import styles from "./ShoppingCartButton.module.scss";

const ShoppingCartButton = (props) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/cart");
  };

  return (
    <button className={styles.button} onClick={handleNavigation}>
      <span>
        <CartIcon />
      </span>
      {cart && <span className={styles.badge}>{cart.length}</span>}
    </button>
  );
};

export default ShoppingCartButton;
