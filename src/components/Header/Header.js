import React from "react";
import MenuIcon from "../UI/icons/MenuIcon";
import LogoIcon from "../UI/icons/LogoIcon";
import SearchIcon from "../UI/icons/SearchIcon";
import CartIcon from "../UI/icons/CartIcon";
import Button from "../UI/buttons/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Button className={styles.menu}>
        <MenuIcon />
      </Button>
      <LogoIcon className={styles.logo} />
      <div>
        <SearchIcon className={styles.search} />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
