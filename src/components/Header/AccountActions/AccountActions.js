import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AccountActions.module.scss";
import { SignIn } from "../../SignIn/SignIn";
import { Modal } from "../../Modal/Modal";
import { UserContext } from "../../../contexts/user/UserContextProvider";
import { removeUserCookie } from "../../../utils/auth";

const AccountActions = (props) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const { user, signOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignIn = (state) => {
    setIsSignIn(state);
  };

  const handleSignOut = () => {
    removeUserCookie();
    signOut();
    navigate(-1);
  };

  return (
    <>
      <div className={styles.actions}>
        {user.email.length > 0 ? (
          <button onClick={handleSignOut}>SIGN OUT</button>
        ) : (
          <button onClick={() => handleSignIn(true)}>SIGN IN</button>
        )}
        {user.email.length === 0 && <Link to={"/signup"}>SIGN UP</Link>}
      </div>
      {isSignIn && (
        <Modal
          isOpen={isSignIn}
          closeHandler={handleSignIn}
          modalContent={<SignIn handleSignInShow={handleSignIn} />}
        />
      )}
    </>
  );
};

export default AccountActions;
