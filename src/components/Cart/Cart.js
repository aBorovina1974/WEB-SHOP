import styles from "./Cart.module.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContextProvider";
import ProductImage from "../Catalog/CatalogItem/ProductImage";
import ProductQuantity from "../Product/ProductQuantity/ProductQuantity";
import { formatPrice } from "../../utils/utils";
import CartActions from "./CartActions/CartActions";
import SelectedColor from "./SelectedColor/SelectedColor";
import useMatchMedia from "../../hooks/useMatchMedia";
import CartItemMobile from "./CartItemMobile/CartItemMobile";

const keys = [
  { key: "name", title: "Product", css: `basis-2/6` },
  { key: "price", title: "Price", css: "basis-1/6" },
  { key: "size", title: "Size", css: "basis-1/12" },
  { key: "quantity", title: "Quantity", css: "basis-3/12" },
  { key: "total", title: "Total", css: "basis-1/6" },
  { key: "", title: "", css: "basis-1/6" },
];

const Cart = () => {
  const isMatchMedia = useMatchMedia(1000);
  const { cart, updateCart } = useContext(CartContext);

  const rowCell = (key, item) => {
    const onQuantityChange = (quantity) => {
      console.log("onQuantityChange::", quantity);
      const totalPrice = formatPrice(item["price"], quantity);

      updateCart({
        id: item["id"],
        image: item["image"],
        name: item["name"],
        price: item["price"],
        color: item["color"],
        quantity: item["quantity"],
        total: totalPrice,
        size: item["size"],
      });
    };

    switch (key) {
      case "name":
        return (
          <div className={styles[key.css]}>
            <div className={styles["name-container"]}>
              <ProductImage height={"100px"} productName={item.image} />
              <div className={styles["name"]}>
                {item[key]}
                <SelectedColor color={item["color"]} />
              </div>
            </div>
          </div>
        );

      case "price":
        return <div className={styles.price}>{item[key]} Eur</div>;

      case "size":
        return <div className={styles.size}>{item[key]}</div>;

      case "quantity":
        return (
          <ProductQuantity
            onQuantityChange={onQuantityChange}
            prodQuantity={item[key]}
          />
        );

      case "total":
        return <div className={styles.total}>{item[key]}</div>;

      case "":
        return <CartActions />;

      default:
        return item[key];
    }
  };

  if (!cart) {
    return <div>No Data</div>;
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
                      <div key={key.key} className={styles[key.css]}>
                        {rowCell(key.key, item)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            cart.map((item) => (
              <CartItemMobile
                key={item.id}
                data={{
                  id: item.id,
                  image: item.image,
                  name: item.name,
                  price: item.price,
                  color: item.color,
                  quantity: item.quantity,
                  total: item.total,
                  size: item.size,
                }}
              />
            ))
          )}
          <div className={styles.actions}>
            <button className={styles.action}>CONTINUE SHOPPING</button>
            <button className={styles.action}>CLEAR SHOPPING CART</button>
          </div>
        </div>

        <div className={styles.order}>
          <div className={styles["order-details"]}>
            <div className={styles.detail}>
              <span className={styles.subtotal}>Subtotal</span>
              <span className={styles.subtotal}>120.00 EUR</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.total}>Order Total</span>
              <span className={styles.total}>120.00 EUR</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
