import React, { useContext } from "react";
import LikeIcon from "../../UI/icons/LikeIcon";
import styles from "./WishListButton.module.scss";
import { WishListContext } from "../../../contexts/save/WishListContextProvider";

const WishListButton = (props) => {
  const { wishList } = useContext(WishListContext);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>
        <LikeIcon />
      </span>
      {wishList && wishList.length > 0 && (
        <span className={styles.badge}>{wishList.length}</span>
      )}
    </button>
  );
};

export default WishListButton;
