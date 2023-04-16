import React, { useContext } from "react";
import LikeIcon from "../../UI/icons/LikeIcon";
import styles from "./WishListButton.module.scss";
import { WishListContext } from "../../../contexts/save/WishListContextProvider";
import { useNavigate } from "react-router-dom";

const WishListButton = () => {
  const { wishList } = useContext(WishListContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/wishlist");
  };

  return (
    <button className={styles.button} onClick={handleNavigate}>
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
