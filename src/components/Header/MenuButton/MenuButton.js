import React, { useState, useEffect } from "react";
import CloseIcon from "../../UI/icons/CloseIcon";
import MenuIcon from "../../UI/icons/MenuIcon";
import styles from "./MenuButton.module.css";

const MenuButton = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(props.isOpen);
  useEffect(() => setIsMenuOpen(props.isOpen), [props.isOpen]);
  return (
    <button className={styles.button} onClick={props.onClick}>
      {!isMenuOpen && <MenuIcon />}
      {isMenuOpen && <CloseIcon />}
    </button>
  );
};

export default MenuButton;
