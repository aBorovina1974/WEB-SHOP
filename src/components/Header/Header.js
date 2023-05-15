import React, { useContext, useEffect, useRef, useState } from "react";
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
import { UserContext } from "../../contexts/user/UserContextProvider";
import { CartContext } from "../../contexts/cart/CartContextProvider";
import MenuButton from "./MenuButton/MenuButton";
import User from "../User/User";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { SignIn } from "../SignIn/SignIn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMatchMedia = useMatchMedia(810);
  const clickOutsideRef = useRef(null);
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const { pathname } = useLocation();
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (state) => {
    setIsSignIn(state);
    if (pathname === "/signup") {
      navigate("/");
    }
  };

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
    <header
      className={`${styles.header} ${
        cart && cart.length > 0 && !user.email.length > 0 ? styles.space : ""
      }`}
    >
      {isMenuOpen && !isMatchMedia && (
        <Menu
          menuRef={clickOutsideRef}
          onClose={toggleMenu}
          handleSignIn={handleSignIn}
        />
      )}
      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <LogoIcon className={styles.logo} />
      <div className={styles["navigation"]}>
        <MainNavigation />
        {isSearchOpen && isMatchMedia && (
          <Search searchRef={clickOutsideRef} placeholder="Search" />
        )}
        {(!isSearchOpen || !isMatchMedia) && pathname === "/catalog" && (
          <SearchButton
            searchBtnRef={clickOutsideRef}
            onClick={isMatchMedia ? openSearchHandler : toggleMenu}
          />
        )}
      </div>
      <div className={styles["navigation"]}>
        <AccountActions handleSignIn={handleSignIn} />
        <WishListButton />
        <ShoppingCartButton />
        {user.email.length > 0 && <User user={user.first_name} />}
      </div>
      {isSignIn && (
        <Modal
          isOpen={isSignIn}
          closeHandler={handleSignIn}
          modalContent={<SignIn handleSignInShow={handleSignIn} />}
        />
      )}
    </header>
  );
};

export default Header;
