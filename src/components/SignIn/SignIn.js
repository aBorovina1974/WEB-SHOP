import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.scss";
import CloseIcon from "../UI/icons/CloseIcon";
import Checkbox from "../Checkbox/Chackbox";
import { UserContext } from "../../contexts/user/UserContextProvider";
import { setUserCookie } from "../../utils/auth";
import InputField from "../InputField/InputField";

export function SignIn({ handleSignInShow }) {
  const navigation = useNavigate();
  const [formUser, setFormUser] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
  const { setUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser((prevUser) => ({ ...prevUser, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  const fetchUser = async () => {
    const response = await fetch(
      "https://web-shop-database-default-rtdb.firebaseio.com/users.json/?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
    );
    const data = await response.json();

    if (data) {
      const foundUser = Object.values(data).find(
        (user) => user.email === formUser.username
      );
      let matchPassword = false;
      if (!foundUser) {
        setError((prev) => ({ ...prev, username: "Username do not exist!" }));
      } else {
        matchPassword = foundUser.password === formUser.password;
        if (!matchPassword) {
          setError((prev) => ({ ...prev, password: "Password is not valid!" }));
        } else {
          if (foundUser && matchPassword) {
            setUserCookie(JSON.stringify(foundUser));
            setUser((prev) => ({
              ...prev,
              ...foundUser,
            }));
            handleSignInShow(false);
          }
        }
      }
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (formUser.username === "") {
      setError((prev) => ({ ...prev, username: "Username is required" }));
    }

    if (formUser.password === "") {
      setError((prev) => ({ ...prev, password: "Password is required" }));
    }

    if (formUser.username.length > 0 && formUser.password.length > 0) {
      await fetchUser();
    }
  };

  const handleCreateAccount = () => {
    navigation("/signup");
    handleSignInShow(false);
  };

  return (
    <form className={styles.container} onSubmit={handleSignIn}>
      <div
        className={styles["close-icon"]}
        onClick={() => handleSignInShow(false)}
      >
        <CloseIcon style={{ color: "#C4C4C4" }} width="21px" height="21px" />
      </div>
      <h2>LOGIN YOUR ACCOUNT</h2>
      <InputField
        id="username"
        name="username"
        type="email"
        value={formUser.username}
        onChange={handleChange}
        error={error.username}
        autocomplete={"username"}
        placeholder={"Username (Email)"}
        classField={styles.field}
        classValidation={styles.validation}
      />
      <InputField
        id="password"
        name="password"
        type="password"
        value={formUser.password}
        onChange={handleChange}
        error={error.password}
        autocomplete={"new-password"}
        placeholder={"Password"}
        classField={styles.field}
        classValidation={styles.validation}
      />
      <Checkbox
        label={
          "By using this form you agree with the storage and handling of your data by this website."
        }
      />
      <button
        type="submit"
        className={styles["button-signin"]}
        disabled={error.username.length > 0 || error.password.length > 0}
        onClick={handleSignIn}
      >
        SIGN IN
      </button>
      <button
        type="button"
        className={styles["button-account"]}
        onClick={handleCreateAccount}
      >
        CREATE AN ACCOUNT
      </button>
    </form>
  );
}
