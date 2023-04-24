import React, { useContext, useEffect, useMemo } from "react";
import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem/CatalogItem";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../contexts/search/SearchContextProvider";
import Spinner from "../Spinner/Spinner";
import { useLocation } from "react-router-dom";
import FilterComponent from "./FilterComponent/FilterComponent";
import NoData from "../NoData/NoData";

const Catalog = () => {
  const { search, selectedBrands, colorFilter, sizeFilter } =
    useContext(SearchContext);

  const { pathname } = useLocation();
  const { data: brands, get: getBrands } = useFetch();
  const { data: products, get: getProducts } = useFetch();
  const { data: categories, get: getCategories } = useFetch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getProducts(
      "https://web-shop-database-default-rtdb.firebaseio.com/products.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
    );
    getCategories(
      "https://web-shop-database-default-rtdb.firebaseio.com/categories.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
    );

    getBrands(
      "https://web-shop-database-default-rtdb.firebaseio.com/brands.json?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
    );
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (search) {
      result = result?.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedBrands && selectedBrands.length > 0) {
      result = result?.filter((product) =>
        selectedBrands.includes(product.brand_id)
      );
    }
    if (colorFilter) {
      result = result?.filter((product) =>
        product.colors.includes(colorFilter)
      );
    }
    if (sizeFilter) {
      result = result?.filter((product) => product.sizes.includes(sizeFilter));
    }
    return result;
  }, [products, search, selectedBrands, colorFilter, sizeFilter]);
  console.log("Products", products);
  console.log("Categories", categories);
  console.log("Brands", brands);

  if (!products || !categories || !brands || !filteredProducts) {
    return <Spinner />;
  }

  return (
    <div className={styles["catalog__container"]}>
      <div className={styles["catalog__filter-container"]}>
        <FilterComponent brands={brands} />
      </div>
      <div className={styles["catalog__catalog-container"]}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CatalogItem
              key={product.id}
              product={product}
              category={categories.find((f) => f.id === product.category_id)}
            />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Catalog;
