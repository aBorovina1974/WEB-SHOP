import React, { useEffect, useRef, useState } from "react";
import useMatchMedia from "../../hooks/useMatchMedia";
import LogoIcon from "../UI/icons/LogoIcon";
import MainNavigation from "./MainNavigation/MainNavigation";
import WishListButton from "./WishListButton/WishListButton";
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import Menu from "./Menu/Menu";
import SearchButton from "./SearchButton/SearchButton";
import AccountActions from "./AccountActions/AccountActions";
import MenuButton from "./MenuButton/MenuButton";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMatchMedia = useMatchMedia(810);
  const clickOutsideRef = useRef(null);

  const openSearchHandler = () => {
    setIsSearchOpen(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clickOutsideRef.current &&
        !clickOutsideRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickOutsideRef]);

  return (
    <header className={styles.header}>
      {isMenuOpen && !isMatchMedia && <Menu menuRef={clickOutsideRef} />}
      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <LogoIcon className={styles.logo} />
      <MainNavigation />
      {isSearchOpen && isMatchMedia && (
        <Search searchRef={clickOutsideRef} placeholder="Search" />
      )}
      {(!isSearchOpen || !isMatchMedia) && (
        <SearchButton
          searchBtnRef={clickOutsideRef}
          onClick={isMatchMedia ? openSearchHandler : toggleMenu}
        />
      )}
      <AccountActions />
      <WishListButton />
      <ShoppingCartButton />
    </header>
  );
};

export default Header;
