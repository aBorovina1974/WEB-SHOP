import { createContext, useMemo, useState } from "react";

const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [colorFilter, setColorFilter] = useState(null);
  const [sizeFilter, setSizeFilter] = useState(null);

  // memoize the full context value
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
    // the Provider gives access to the context to its children
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
