// import SearchIcon from "../UI/icons/SearchIcon";
import Input from "../UI/inputs/Input";
import styles from "./Search.module.scss";
import { useContext } from "react";
import { SearchContext } from "../../contexts/search/SearchContextProvider";

const Search = (props) => {
  const { setSearch } = useContext(SearchContext);

  let timeoutId;
  const searchHandler = (event) => {
    const { value } = event.target;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      setSearch(value);
      timeoutId = null;
    }, 500);
  };

  return (
    <>
      <form ref={props.searchRef} className={styles.search}>
        <Input
          className={styles.input}
          type="text"
          placeholder={props.placeholder}
          onChange={searchHandler}
        />
        {/* <button className={styles.button}>
          <span className={styles.title}>FIND</span>
          <span className={styles.icon}>
            <SearchIcon width={12} height={12} />
          </span>
        </button> */}
      </form>
    </>
  );
};

export default Search;
