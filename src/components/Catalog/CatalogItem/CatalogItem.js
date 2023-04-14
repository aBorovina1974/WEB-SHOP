import React from "react";
import ProductImage from "./ProductImage";
import styles from "./CatalogItem.module.scss";
import ColorPalette from "../../ColorPalette/ColorPalette";
import { Link } from "react-router-dom";
import { createColorArray } from "../../../utils/utils";

const CatalogItem = ({ product, category }) => {
  const colors = createColorArray(product.colors, 1);

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
        {product.price} EUR
      </span>
      <ColorPalette colors={colors} onColorChange={console.log} />
    </div>
  );
};

export default CatalogItem;
