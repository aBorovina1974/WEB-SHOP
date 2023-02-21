import React from "react";
import Button from "../UI/buttons/Button";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search something..." />
      <Button {...props.btnProps}>{props.buttonContent}</Button>
    </div>
  );
};

export default SearchBar;
