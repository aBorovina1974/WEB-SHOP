import React from "react";
import { Link } from "react-router-dom";
import styles from "./AccountActions.module.scss";

const AccountActions = (props) => {
  return (
    <div className={styles.actions}>
      <button onClick={props.onClick}>SIGN IN</button>
      <Link to={"/new"}>SIGN UP</Link>
    </div>
  );
};

export default AccountActions;
