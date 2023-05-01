import React, { useReducer, useState } from "react";
import styles from "./NewAccountForm.module.scss";
import InputField from "../InputField/InputField";
import useFetch from "../../hooks/useFetch";
import CheckBoxField from "../CheckBoxField/CheckBoxField";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import { Modal } from "../Modal/Modal";
import { SignIn } from "../SignIn/SignIn";

const initialState = {
  firstName: "",
  lastName: "",
  newsletter: false,
  username: "",
  password: "",
  confirmPassword: "",
  errors: {},
};

const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+.])(?=.*[a-z]).{8,}$/;
  return regex.test(password);
};

const checkError = (state) => {
  const errors = {};
  if (!state.firstName) {
    errors.firstName = "First name is required";
  }
  if (!state.lastName) {
    errors.lastName = "Last name is required";
  }
  if (!state.username) {
    errors.username = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(state.username)) {
    errors.username = "Email address is invalid";
  }
  if (!state.password) {
    errors.password = "Password is required";
  } else if (state.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!validatePassword(state.password)) {
    errors.password =
      "Password must have at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
  }
  if (state.password !== state.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }
  return {
    ...state,
    errors,
  };
};

const accountFormReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
        errors: {
          ...state.errors,
          [action.payload.key]: null,
        },
      };
    case "SUBMIT":
      const currentState = checkError(state);
      return { ...currentState };

    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.key]: action.payload.value,
        },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const NewAccountForm = () => {
  const [state, dispatch] = useReducer(accountFormReducer, initialState);
  const navigate = useNavigate();
  const { isLoading, post } = useFetch();
  const { showSuccess, showError, notificationComponent } = useNotification();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = (state) => {
    setIsSignedIn(state);
  };

  function allKeysNull(obj) {
    for (const key in obj) {
      if (obj[key] !== null) {
        return false;
      }
    }
    return true;
  }

  const onInputAction = (event) => {
    dispatch({
      type: "CHANGE",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  const onCheckboxAction = (event) => {
    dispatch({
      type: "CHANGE",
      payload: { key: event.target.name, value: event.target.checked },
    });
  };

  function checkUsernameExists(obj, username) {
    return Object.values(obj).some((user) => user.email === username);
  }

  const checkUsername = async () => {
    try {
      const response = await fetch(
        "https://web-shop-database-default-rtdb.firebaseio.com/users.json/?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
      );
      const data = await response.json();
      if (data) {
        const userExist = checkUsernameExists(data, state.username);
        if (userExist) {
          dispatch({
            type: "SET_ERROR",
            payload: { key: "username", value: "Username already exists!" },
          });
        } else {
          await saveUser();
        }
      } else {
        await saveUser();
      }
    } catch (error) {
      console.error(error);
      showError(error);
    }
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  const saveUser = async () => {
    await post(
      "https://web-shop-database-default-rtdb.firebaseio.com/users.json/?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT",
      {
        first_name: state.firstName,
        last_name: state.lastName,
        newsletter: state.newsletter,
        email: state.username,
        password: state.password,
      }
    );
    dispatch({ type: "RESET" });
    showSuccess("User created successfully!");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const currentState = checkError(state);
    if (allKeysNull(currentState.errors)) {
      checkUsername();
      handleSignIn(true);
    } else {
      dispatch({ type: "SUBMIT" });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create New Customer Account</h1>
      <div className={styles.border}>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <h2>Personal Information</h2>
          <InputField
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            value={state.firstName}
            onChange={onInputAction}
            error={state.errors.firstName}
            required={true}
            placeholder={"First Name"}
          />
          <InputField
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            value={state.lastName}
            onChange={onInputAction}
            error={state.errors.lastName}
            required={true}
            placeholder={"Last Name"}
          />
          <InputField
            id="username"
            name="username"
            label="Email"
            type="email"
            value={state.username}
            onChange={onInputAction}
            error={state.errors.username}
            autocomplete={"username"}
            required={true}
            placeholder={"Email"}
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={state.password}
            onChange={onInputAction}
            error={state.errors.password}
            autocomplete={"new-password"}
            required={true}
            placeholder={"Password"}
          />
          <InputField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={state.confirmPassword}
            onChange={onInputAction}
            error={state.errors.confirmPassword}
            autocomplete={"new-password"}
            required={true}
            placeholder={"Confirm Password"}
          />
          <h2>Sign Up for Newsletter</h2>
          <CheckBoxField
            id="newsletter"
            name="newsletter"
            label="Sign Up for Newsletter"
            type="checkbox"
            value={state.newsletter}
            onChange={onCheckboxAction}
            error={state.errors.newsletter}
            required={true}
            checked={state.newsletter}
          />

          <div className={styles.actions}>
            <button
              disabled={isLoading || !allKeysNull(state.errors)}
              className={styles.submit}
              formNoValidate={true}
            >
              CREATE NEW ACCOUNT
            </button>
            <button
              type="button"
              onClick={handleNavigate}
              className={styles.back}
            >
              BACK
            </button>
          </div>
        </form>
      </div>
      {isSignedIn && (
        <Modal
          isOpen={isSignedIn}
          closeHandler={handleSignIn}
          modalContent={<SignIn handleSignInShow={handleSignIn} />}
        />
      )}
      {notificationComponent}
    </div>
  );
};

export default NewAccountForm;
