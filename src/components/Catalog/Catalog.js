import React, { useContext, useEffect, useState } from "react";
import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem/CatalogItem";
import ColorPalette from "../ColorPalette/ColorPalette";
import {
  colors,
  createColorArray,
  createSizeArray,
  sizes,
} from "../../utils/utils";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../contexts/search/SearchContextProvider";
import Sizes from "../Sizes/Sizes";
import Spinner from "../Spinner/Spinner";

const Catalog = () => {
  const { search } = useContext(SearchContext);
  const [allSizes, setAllSizes] = useState([]);
  const [allColors, setAllColors] = useState([]);
  const { data: products, get: getProducts, error: errorProducts } = useFetch();
  const {
    data: categories,
    get: getCategories,
    error: errorCategories,
  } = useFetch();

  useEffect(() => {
    getProducts(
      "https://web-shop-database-default-rtdb.firebaseio.com/products.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
    );
    getCategories(
      "https://web-shop-database-default-rtdb.firebaseio.com/categories.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
    );

    setAllSizes(createSizeArray(sizes));
    setAllColors(createColorArray(colors));
  }, []);

  const onColorChange = () => {
    console.log("color change");
  };

  const onSizeChange = () => {
    console.log("size change");
  };

  if (errorProducts || errorCategories) {
    return (
      <div style={{ marginTop: "5rem" }}>
        Error...{errorProducts}
        {errorCategories}
      </div>
    );
  }

  if (!products || !categories) {
    return <Spinner />;
  }

  return (
    <div className={styles["catalog__container"]}>
      <div className={styles["catalog__filter-container"]}>
        <p>Color</p>
        <div className="catalog__color-palette">
          <ColorPalette onColorChange={onColorChange} colors={allColors} />
        </div>
        <p>Size</p>
        <div className="catalog__color-palette">
          <Sizes onSizeChange={onSizeChange} sizes={allSizes} />
        </div>
      </div>
      <div className={styles["catalog__catalog-container"]}>
        {products
          .filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <CatalogItem
              key={product.id}
              product={product}
              category={categories.find((f) => f.id === product.category_id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Catalog;
