import BrandFilterItem from "./BrandFilterItem/BrandFilterItem";
import { useContext } from "react";
import { SearchContext } from "../../contexts/search/SearchContextProvider";

const BrandFilter = ({ brands, onBrandSelection }) => {
  const { selectedBrands } = useContext(SearchContext);

  return (
    <div>
      {brands.map((brand) => (
        <BrandFilterItem
          key={brand.id}
          onBrandSelection={onBrandSelection}
          label={brand.name}
          checked={selectedBrands ? selectedBrands.includes(brand.id) : false}
          value={brand.id}
        />
      ))}
    </div>
  );
};

export default BrandFilter;
