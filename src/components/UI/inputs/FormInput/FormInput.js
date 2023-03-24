import React from "react";
import FormDropdown from "../FormDropdown/FormDropdown";
import styles from "./FormInput.module.scss";

const FormInput = React.forwardRef((props, ref) => {
  const label = (
    <label
      htmlFor={props.input.id}
      className={`${styles.label} ${
        props.input.type === "checkbox" ? styles.row : ""
      } ${props.input.type === "dropdown" ? styles.dropdown : ""}`}
    >
      {props.input.label}
    </label>
  );

  return (
    <div
      className={`${styles.input} ${props.className} ${
        props.input.type === "checkbox" ? styles.space : ""
      } `}
    >
      {props.input.position === "LEFT" && label}
      {props.input.type !== "dropdown" ? (
        <input
          ref={ref}
          {...props.input}
          className={`${
            props.input.type !== "checkbox" ? styles.field : styles.checkbox
          }`}
        />
      ) : (
        <FormDropdown
          action={props.action}
          related={props.related}
          options={props.options}
          onRelated={props.onRelated}
        />
      )}
      {props.input.position === "RIGHT" && label}
    </div>
  );
});

export default FormInput;
