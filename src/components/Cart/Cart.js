import styles from "./Cart.module.scss";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart/CartContextProvider";
import CartItem from "./CartItem/CartItem";
import NoData from "../NoData/NoData";
import useMatchMedia from "../../hooks/useMatchMedia";
import CartItemMobile from "./CartItemMobile/CartItemMobile";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
import { formatPrice } from "../../utils/utils";
import useFetch from "../../hooks/useFetch";
import { UserContext } from "../../contexts/user/UserContextProvider";
import useNotification from "../../hooks/useNotification";

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
  const subTotal = calculateTotal();
  const tax = subTotal * 0.25; // 25% from total
  const total = subTotal + tax;
  const { pathname } = useLocation();
  const { post, error, isLoading } = useFetch();
  const { user } = useContext(UserContext);
  const { notificationComponent, showSuccess, showError } = useNotification();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        {notificationComponent}
      </>
    );
  }

  const handleCheckout = async () => {
    await post(
      "https://web-shop-database-default-rtdb.firebaseio.com/orders.json/?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT",
      {
        user: user.email,
        order: cart,
        created: new Date(),
        subtotal: subTotal,
        tax: tax,
        total: total,
      }
    );
    if (error) {
      showError(error.message);
    } else {
      showSuccess("Order successfully created!");
      clearCart();
    }
  };

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
                  <div className={styles["table-row"]} key={uuid4()}>
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
                key={uuid4()}
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
              <span className={styles.subtotal}>
                {formatPrice(subTotal, "EUR")}
              </span>
            </div>
            <div className={styles.detail}>
              <span className={styles.tax}>Tax</span>
              <span className={styles.tax}>{formatPrice(tax, "EUR")}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.total}>Order Total</span>
              <span className={styles.total}>{formatPrice(total, "EUR")}</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            type="button"
            className={
              isLoading || user.email.length === 0
                ? styles["checkout-button-disabled"]
                : styles["checkout-button"]
            }
            disabled={isLoading || user.email.length === 0}
          >
            {user.email.length === 0
              ? "Please login to proceed"
              : "Proceed to checkout"}
          </button>
        </div>
      </div>
      {notificationComponent}
    </>
  );
};

export default Cart;
