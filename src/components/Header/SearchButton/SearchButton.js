import React from "react";
import SearchIcon from "../../UI/icons/SearchIcon";
import styles from "./SearchButton.module.css";
import useMatchMedia from "../../../hooks/useMatchMedia";

const SearchButton = (props) => {
  const { width, height } = useMatchMedia(40)
    ? { width: "16", height: "16" }
    : { width: "19", height: "19" };

  return (
    <button className={styles.search} onClick={props.onClick}>
      <SearchIcon width={width} height={height} />
      <span>SEARCH</span>
    </button>
  );
};

export default SearchButton;
