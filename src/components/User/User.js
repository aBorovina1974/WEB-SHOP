import React from "react";
import { Link } from "react-router-dom";
import UserProfileButton from "../Header/UserProfileButton/UserProfileButton";
import styles from "./User.module.scss";
import useMatchMedia from "../../hooks/useMatchMedia";

const User = ({ user }) => {
  const isMatchMedia = useMatchMedia(810);
  return (
    <>
      <Link to={"/myprofile"} className={styles.container}>
        {isMatchMedia ? (
          <>
            <UserProfileButton />
            <span className={styles.user}>{user}</span>
          </>
        ) : (
          <span className={styles.user}>{user.charAt(0)}</span>
        )}
      </Link>
    </>
  );
};

export default User;
