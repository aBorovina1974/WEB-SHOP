import React from "react";
import RightArrowIcon from "../../icons/RightArrowIcon";
import styles from "./AccFormInput.module.scss";

const AccFormInput = React.forwardRef((props, ref) => {
  const label = <label htmlFor={props.input.id}>{props.input.label}</label>;

  return (
    <div
      className={`${styles.input} ${
        props.input.type === "checkbox" ? styles.space : ""
      }`}
    >
      {props.input.position === "LEFT" && label}
      <input
        ref={ref}
        {...props.input}
        className={`${
          props.input.type !== "checkbox" ? styles.field : styles.checkbox
        }`}
      />
      {props.input.position === "RIGHT" && label}
    </div>
  );
});

export default AccFormInput;
