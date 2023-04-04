import React from "react";
import styles from "./FormInputInfo.module.scss";
import ErrorIcon from "../../../icons/ErrorIcon";
import SuccessIcon from "../../../icons/SuccessIcon";

const FormInputInfo = (props) => {
  const getInfo = (hasError, value) => {
    let info = null;
    if (value === "") {
      if (hasError) {
        info = { message: "This is a required field!", type: "empty" };
      }
      if (
        props.input.type === "password" &&
        props.input.password_input === "enter"
      ) {
        info = { message: "Password Strength: No Password", type: "info" };
      }
    }
    if (value !== "") {
      if (hasError && props.input.type === "email") {
        info = {
          message: "Invalid email! Please enter valid email",
          type: "error",
        };
      }
      if (hasError && props.input.type === "password") {
        info = { message: "Password To Short!", type: "error" };
      }
      if (!hasError && props.input.type === "password" && value.length > 10) {
        info = { message: "Strong Password!", type: "success" };
      }
    }
    return info;
  };

  const info = getInfo(props.input.error, props.input.value);

  return (
    <>
      {info && (
        <div
          className={`${styles["validation-info"]} ${
            info.type === "empty" ? styles.empty : ""
          } ${info.type === "error" ? styles.error : ""}${
            info.type === "info" && props.input.password_input === "enter"
              ? styles.info
              : ""
          } ${info.type === "success" ? styles.success : ""}`}
        >
          <span className={styles.message}>{info.message}</span>
          <span>
            {info.type === "error" && <ErrorIcon />}
            {info.type === "success" && <SuccessIcon />}
          </span>
        </div>
      )}
    </>
  );
};

export default FormInputInfo;
