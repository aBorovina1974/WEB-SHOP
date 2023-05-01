import React from "react";
import { Link } from "react-router-dom";
import UserProfileButton from "../Header/UserProfileButton/UserProfileButton";
import styles from "./User.module.scss";

const User = ({ user }) => {
  return (
    <>
      <Link to={"/myprofile"} className={styles.container}>
        <UserProfileButton />
        <span className={styles.user}>{user}</span>
      </Link>
    </>
  );
};

export default User;
