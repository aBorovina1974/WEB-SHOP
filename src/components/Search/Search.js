import SearchIcon from "../UI/icons/SearchIcon";
import Input from "../UI/inputs/Input";
import styles from "./Search.module.css";

const Search = (props) => {
  return (
    <>
      <form className={styles.search}>
        <Input
          className={styles.input}
          type="text"
          placeholder={props.placeholder}
        />
        <button className={styles.button}>
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
