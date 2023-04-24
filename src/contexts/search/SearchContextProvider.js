import { createContext, useMemo, useState } from "react";

const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [colorFilter, setColorFilter] = useState(null);
  const [sizeFilter, setSizeFilter] = useState(null);

  const contextValue = useMemo(
    () => ({
      search,
      setSearch,
      selectedBrands,
      setSelectedBrands,
      colorFilter,
      setColorFilter,
      sizeFilter,
      setSizeFilter,
    }),
    [
      search,
      setSearch,
      selectedBrands,
      setSelectedBrands,
      colorFilter,
      setColorFilter,
      sizeFilter,
      setSizeFilter,
    ]
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
