import styles from "./CartItem.module.scss";
import ProductImage from "../../Catalog/CatalogItem/ProductImage";
import useQuantity from "../../../hooks/useQuantity";
import { useEffect } from "react";
import { calcAndFormatTotalPrice } from "../../../utils/utils";
import CartActions from "../CartActions/CartActions";
import SelectedColor from "../SelectedColor/SelectedColor";

const CartItem = ({ columns, product, handleUpdateCart }) => {
  const { quantityComponent, quantity } = useQuantity(product);

  useEffect(() => {
    handleUpdateCart(
      product,
      quantity,
      calcAndFormatTotalPrice(quantity, product.price)
    );
  }, [quantity]);

  const rowCell = (key, item) => {
    switch (key.key) {
      case "name":
        return (
          <div className={styles[key.css]}>
            <div className={styles["name-container"]}>
              <ProductImage height={"100px"} productName={item.image} />
              <div className={styles["name"]}>
                {item[key.key]}
                <SelectedColor color={item["color"]} />
              </div>
            </div>
          </div>
        );

      case "price":
        return <div className={styles.price}>{item[key.key]} Eur</div>;

      case "size":
        return <div className={styles.size}>{item[key.key]}</div>;

      case "quantity":
        return quantityComponent;

      case "total":
        return <div className={styles.total}>{item[key.key]}</div>;

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
