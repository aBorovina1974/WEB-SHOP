import React from "react";
import SearchIcon from "../UI/icons/SearchIcon";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">SHOP</a>
        </li>
        <li>
          <a href="">BLOG</a>
        </li>
        <li>
          <a href="">SALE</a>
        </li>
        <li>
          <a href="">CONTACT US</a>
        </li>
        <li>
          <a>
            <SearchIcon />
            SEARCH
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
