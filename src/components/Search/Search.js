import SearchIcon from "../UI/icons/SearchIcon";
import Input from "../UI/inputs/Input";
import styles from "./Search.module.scss";

const Search = (props) => {
  const searchHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form ref={props.searchRef} className={styles.search}>
        <Input
          className={styles.input}
          type="text"
          placeholder={props.placeholder}
        />
        <button className={styles.button} onClick={searchHandler}>
          <span className={styles.title}>FIND</span>
          <span className={styles.icon}>
            <SearchIcon width={12} height={12} />
          </span>
        </button>
      </form>
    </>
  );
};

export default Search;
