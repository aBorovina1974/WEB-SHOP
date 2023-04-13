import React, { useContext } from "react";
import { WishListContext } from "../../../contexts/save/WishListContextProvider";
import LikeIcon from "../../UI/icons/LikeIcon";
import styles from "./WishListButton.module.scss";
const WishListButton = (props) => {
  const { wishList } = useContext(WishListContext);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>
        <LikeIcon />
      </span>
      {wishList && <span className={styles.badge}>{wishList.length}</span>}
    </button>
  );
};

export default WishListButton;
