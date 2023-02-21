import React, { useState } from "react";
import useMatchMedia from "../../hooks/useMatchMedia";
import LogoIcon from "../UI/icons/LogoIcon";
import MainNavigation from "./MainNavigation/MainNavigation";
import WishListButton from "./WishListButton/WishListButton";
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";
import Search from "../Search/Search";
import styles from "./Header.module.css";
import Menu from "./Menu/Menu";
import SearchButton from "./SearchButton/SearchButton";
import AccountActions from "./AccountActions/AccountActions";
import MenuButton from "./MenuButton/MenuButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMatchMedia = useMatchMedia(40);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  const openSearchHandler = () => {
    setIsSearchOpen(true);
  };

  return (
    <header className={styles.header}>
      {isMenuOpen && !isMatchMedia && <Menu />}
      <MenuButton
        isOpen={isMenuOpen}
        onClick={isMenuOpen ? closeMenuHandler : openMenuHandler}
      />
      <LogoIcon className={styles.logo} />
      <MainNavigation />
      {isSearchOpen && isMatchMedia && <Search placeholder="Search" />}
      {(!isSearchOpen || !isMatchMedia) && (
        <SearchButton
          onClick={isMatchMedia ? openSearchHandler : openMenuHandler}
        />
      )}
      <AccountActions />
      <WishListButton />
      <ShoppingCartButton />
    </header>
  );
};

export default Header;
