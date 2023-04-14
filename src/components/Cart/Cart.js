import styles from "./Cart.module.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContextProvider";
import CartItem from "./CartItem/CartItem";
import NoData from "../NoData/NoData";
import useMatchMedia from "../../hooks/useMatchMedia";
import CartItemMobile from "./CartItemMobile/CartItemMobile";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/utils";

const keys = [
  { key: "name", title: "Product", css: `basis-2/6` },
  { key: "price", title: "Price", css: "basis-1/6" },
  { key: "size", title: "Size", css: "basis-1/12" },
  { key: "quantity", title: "Quantity", css: "basis-3/12" },
  { key: "total", title: "Total", css: "basis-1/6" },
  { key: "", title: "", css: "basis-1/6" },
];

const Cart = () => {
  const { cart, updateCart, clearCart, calculateTotal } =
    useContext(CartContext);
  const isMatchMedia = useMatchMedia(1024);
  const navigate = useNavigate();
  const total = formatPrice(calculateTotal());

  const handleUpdateCart = (product, totalQuantity, totalPrice) => {
    updateCart({
      ...product,
      quantity: totalQuantity,
      total: totalPrice,
    });
  };

  const handleContinueShopping = () => {
    navigate("/catalog");
  };

  const handleClearCart = () => {
    clearCart();
  };

  const action = (
    <button onClick={handleContinueShopping} className={styles.action}>
      CONTINUE SHOPPING
    </button>
  );

  if (!cart || (cart && cart.length === 0)) {
    return (
      <>
        <NoData text={"Cart is empty"} action={action} />
      </>
    );
  }

  return (
    <>
      <div className={styles.title}>
        <h3>Shopping Cart</h3>
      </div>
      <div className={styles.container}>
        <div className={styles["cart-items-actions"]}>
          {isMatchMedia ? (
            <div className={styles["cart-items"]}>
              <div className={styles["header-row"]}>
                {keys.map((key) => (
                  <div key={key.key} className={styles[key.css]}>
                    {key.title}
                  </div>
                ))}
              </div>
              <div className={styles["row-container"]}>
                {cart.map((item) => (
                  <div className={styles["table-row"]} key={item.id}>
                    {keys.map((key) => (
                      <CartItem
                        key={key.key}
                        columns={key}
                        product={item}
                        handleUpdateCart={handleUpdateCart}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            cart.map((item) => (
              <CartItemMobile
                key={item.id}
                product={item}
                handleUpdateCart={handleUpdateCart}
              />
            ))
          )}
          <div className={styles.actions}>
            <button onClick={handleContinueShopping} className={styles.action}>
              CONTINUE SHOPPING
            </button>
            <button onClick={handleClearCart} className={styles.action}>
              CLEAR SHOPPING CART
            </button>
          </div>
        </div>

        <div className={styles.order}>
          <div className={styles["order-details"]}>
            <div className={styles.detail}>
              <span className={styles.subtotal}>Subtotal</span>
              <span className={styles.subtotal}>{total}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.total}>Order Total</span>
              <span className={styles.total}>{total}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
