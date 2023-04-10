import React from "react";
import styles from "./UserProfileButton.module.scss";
import UserIcon from "../../UI/icons/UserIcon";

const UserProfileButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>
        <UserIcon/>
      </span>
    </button>
  );
};

export default UserProfileButton;
