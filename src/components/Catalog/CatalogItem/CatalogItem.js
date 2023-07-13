import React, { useState } from "react";
import ProductImage from "../../Product/ProductGalery/ProductImage";
import styles from "./CatalogItem.module.scss";
import ColorPalette from "../../ColorPalette/ColorPalette";
import { Link } from "react-router-dom";
import { createColorArray, formatPrice } from "../../../utils/utils";

const CatalogItem = ({ product, category }) => {
  const [colors, setColors] = useState(createColorArray(product.colors, 1));

  const onColorChange = (id) => {
    setColors((prev) =>
      prev
        .map((p) => {
          return {
            ...p,
            selected: false,
          };
        })
        .map((color) => {
          if (color.id === id) {
            return {
              ...color,
              selected: true,
            };
          }
          return color;
        })
    );
  };

  return (
    <div className={styles["catalog-item__container"]}>
      <Link to={`/product/${product.id}`}>
        <ProductImage productName={product.image} />
      </Link>
      <span className={styles["catalog-item__category-title"]}>
        {category.name}
      </span>
      <span className={styles["catalog-item__product-name"]}>
        {product.name}
      </span>
      <span className={styles["catalog-item__product-price"]}>
        {formatPrice(product.price, "EUR")}
      </span>
      <ColorPalette colors={colors} onColorChange={onColorChange} />
    </div>
  );
};

export default CatalogItem;
