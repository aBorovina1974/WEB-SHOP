import styles from "./CartItem.module.scss";
import ProductImage from "../../Product/ProductGalery/ProductImage";
import CartActions from "../CartActions/CartActions";
import SelectedColor from "../SelectedColor/SelectedColor";
import React, { useState } from "react";
import ProductQuantity from "../../Product/ProductQuantity/ProductQuantity";
import { calcTotalPrice, formatPrice } from "../../../utils/utils";

const CartItem = ({ columns, product, handleUpdateCart }) => {
  const [quantity, setQuantity] = useState(product ? product.quantity : 1);

  const onQuantityChange = (type) => {
    switch (type) {
      case "+":
        setQuantity((prev) => {
          const result = prev + 1;
          handleUpdateCart(
            product,
            result,
            calcTotalPrice(result, product.price)
          );
          return result;
        });
        break;
      case "-":
        setQuantity((prev) => {
          if (prev > 1) {
            const result = prev - 1;
            handleUpdateCart(
              product,
              result,
              calcTotalPrice(result, product.price)
            );
            return result;
          }
          return prev;
        });
        break;
      default:
        break;
    }
  };

  const rowCell = (key, item) => {
    switch (key.key) {
      case "name":
        return (
          <div className={styles[key.css]}>
            <div className={styles["name-container"]}>
              <ProductImage height={"104px"} productName={item.image} />
              <div className={styles["name"]}>
                {item[key.key]}
                <SelectedColor color={item["color"]} />
              </div>
            </div>
          </div>
        );

      case "price":
        return (
          <div className={styles.price}>
            {formatPrice(item[key.key], "EUR")}
          </div>
        );

      case "size":
        return <div className={styles.size}>{item[key.key]}</div>;

      case "quantity":
        return (
          <ProductQuantity
            onQuantityChange={onQuantityChange}
            quantity={quantity}
          />
        );

      case "total":
        return (
          <div className={styles.total}>
            {formatPrice(item[key.key], "EUR")}
          </div>
        );

      default:
        return <CartActions product={item} />;
    }
  };

  if (!product) {
    return <div>No Data</div>;
  }

  return <div className={styles[columns.css]}>{rowCell(columns, product)}</div>;
};

export default CartItem;
