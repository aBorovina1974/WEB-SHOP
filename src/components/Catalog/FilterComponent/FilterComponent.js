import React, { useContext, useEffect, useState } from "react";
import styles from "./FilterComponent.module.scss";
import PlusIcon from "../../UI/icons/PlusIcon";
import MinusIcon from "../../UI/icons/MinusIcon";
import BrandFilter from "../../BrandFilter/BrandFilter";
import ColorPalette from "../../ColorPalette/ColorPalette";
import Sizes from "../../Sizes/Sizes";
import useMatchMedia from "../../../hooks/useMatchMedia";
import {
  colors,
  createColorArray,
  createSizeArray,
  sizes,
} from "../../../utils/utils";
import { SearchContext } from "../../../contexts/search/SearchContextProvider";

const FilterComponent = ({ brands }) => {
  const {
    search,
    setSearch,
    selectedBrands,
    setSelectedBrands,
    colorFilter,
    setColorFilter,
    sizeFilter,
    setSizeFilter,
  } = useContext(SearchContext);
  const [showDetails, setShowDetails] = useState(true);
  const [allSizes, setAllSizes] = useState(createSizeArray(sizes));
  const [allColors, setAllColors] = useState(createColorArray(colors));
  const isMatchMedia = useMatchMedia(1024);

  useEffect(() => {
    setShowDetails(isMatchMedia);
  }, [isMatchMedia]);

  useEffect(() => {
    if (allColors) {
      const selColor = allColors.find((f) => f.selected === true);
      selColor && setColorFilter(selColor.color);
    }
  }, [allColors]);

  useEffect(() => {
    if (allSizes) {
      const selSize = allSizes.find((f) => f.selected === true);
      selSize && setSizeFilter(selSize.size);
    }
  }, [allSizes]);
  const onColorChange = (id) => {
    setAllColors((prev) =>
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

  const onSizeChange = (id) => {
    setAllSizes((prev) =>
      prev
        .map((s) => {
          return {
            ...s,
            selected: false,
          };
        })
        .map((size) => {
          if (size.id === id) {
            return {
              ...size,
              selected: true,
            };
          }
          return size;
        })
    );
  };

  const onBrandSelection = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
    }
  };

  const handleResetFilter = () => {
    setSelectedBrands([]);
    setColorFilter(null);
    setSizeFilter(null);
    setSearch("");
    setAllColors((prev) =>
      prev.map((p) => {
        return {
          ...p,
          selected: false,
        };
      })
    );
    setAllSizes((prev) =>
      prev.map((s) => {
        return {
          ...s,
          selected: false,
        };
      })
    );
  };

  return (
    <div className={styles["details__container"]}>
      <div className={styles.filter}>
        <div className={styles.title}>
          <h2>Filter</h2>
          {(search ||
            selectedBrands.length > 0 ||
            sizeFilter ||
            colorFilter) && (
            <button className={styles.reset} onClick={handleResetFilter}>
              Reset all filters
            </button>
          )}
          <button
            className={styles.button}
            onClick={() => setShowDetails((prev) => !prev)}
          >
            {!showDetails ? <PlusIcon /> : <MinusIcon />}
          </button>
        </div>
        <div className={!showDetails ? styles["no-content"] : styles.content}>
          <p className={styles["filter-title"]}>Brands</p>
          <div className="catalog__color-palette">
            <BrandFilter brands={brands} onBrandSelection={onBrandSelection} />
          </div>
          <p className={styles["filter-title"]}>Color</p>
          <div className="catalog__color-palette">
            <ColorPalette onColorChange={onColorChange} colors={allColors} />
          </div>
          <p className={styles["filter-title"]}>Size</p>
          <div className="catalog__color-palette">
            <Sizes onSizeChange={onSizeChange} sizes={allSizes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
