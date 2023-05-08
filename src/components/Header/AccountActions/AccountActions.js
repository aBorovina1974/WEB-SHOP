import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AccountActions.module.scss";
import { UserContext } from "../../../contexts/user/UserContextProvider";
import { removeUserCookie } from "../../../utils/auth";

const AccountActions = (props) => {
  const { user, signOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    removeUserCookie();
    signOut();
    navigate("/");
  };

  return (
    <>
      <div className={styles.actions}>
        {user.email.length > 0 ? (
          <button onClick={handleSignOut}>SIGN OUT</button>
        ) : (
          <button onClick={() => props.handleSignIn(true)}>SIGN IN</button>
        )}
        {user.email.length === 0 && <Link to={"/signup"}>SIGN UP</Link>}
      </div>
    </>
  );
};

export default AccountActions;
