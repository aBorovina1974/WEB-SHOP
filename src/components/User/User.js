import React from "react";
import UserProfileButton from "../Header/UserProfileButton/UserProfileButton";
import styles from "./User.module.scss";

const User = ({ user }) => {
  return (
    <>
      <UserProfileButton />
      <span className={styles.user}>{user}</span>
    </>
  );
};

export default User;
