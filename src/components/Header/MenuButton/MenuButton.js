import React, { useState, useEffect } from "react";
import CloseIcon from "../../UI/icons/CloseIcon";
import MenuIcon from "../../UI/icons/MenuIcon";
import styles from "./MenuButton.module.scss";

const MenuButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {!props.isOpen && <MenuIcon />}
      {props.isOpen && <CloseIcon />}
    </button>
  );
};

export default MenuButton;
