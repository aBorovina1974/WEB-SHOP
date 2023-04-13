import { createContext, useMemo, useState } from "react";

const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  // memoize the full context value
  const contextValue = useMemo(
    () => ({
      search,
      setSearch,
    }),
    [search, setSearch]
  );

  return (
    // the Provider gives access to the context to its children
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
