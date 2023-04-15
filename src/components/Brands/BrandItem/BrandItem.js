import React, { useContext } from "react";
import styles from "./BrandItem.module.scss";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../contexts/search/SearchContextProvider";

const BrandItem = ({ idBrand, logo }) => {
  const navigation = useNavigate();
  const { setSelectedBrands } = useContext(SearchContext);

  const handleBrandSelection = () => {
    setSelectedBrands([idBrand]);
    navigation("/catalog");
  };

  return (
    <button onClick={handleBrandSelection} className={styles.brand}>
      <img src={logo} alt="Brand" />
    </button>
  );
};

export default BrandItem;
