import React from "react";
import ProductImage from "./ProductImage";
import styles from './CatalogItem.module.scss'
import ColorPalette from "../../ColorPalette/ColorPalette";
import {getRandomColors} from "../../../utils/utils";
import {Link} from "react-router-dom";

const CatalogItem = ({product, category}) => {
  const colors = getRandomColors(3, 2);
  return (
    <div className={styles['catalog-item__container']}>
      <Link to={`/product/${product.id}`}>
        <ProductImage productName={product.image}/>
      </Link>
      <span className={styles['catalog-item__category-title']}>{category.name}</span>
      <span className={styles['catalog-item__product-name']}>{product.name}</span>
      <span className={styles['catalog-item__product-price']}>{product.price} EUR</span>
      <ColorPalette colors={colors}/>
    </div>
  );
};

export default CatalogItem;
