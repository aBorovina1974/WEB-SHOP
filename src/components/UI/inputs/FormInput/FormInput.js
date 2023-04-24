import React, { useEffect } from "react";
import useInput from "../../../../hooks/useInput";
import FormDropdown from "../FormDropdown/FormDropdown";
import styles from "./FormInput.module.scss";
import FormInputInfo from "./FormInputInfo/FormInputInfo";

const FormInput = React.forwardRef((props, ref) => {
  const validateInput = (value) => {
    if (props.input.required) {
      if (props.input.type === "email") {
        return value.includes("@");
      }
      if (props.input.type === "password") {
        return value.length > 5;
      }
      if (props.input.type === "checkbox") {
        return value === true;
      }

      return value.trim() !== "";
    }
    return true;
  };

  const {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput(validateInput);

  useEffect(
    () =>
      props.onInput({
        id: props.input.id,
        type: props.input.type,
        ...(props.input.type === "password" && {
          password_input: props.input.password_input,
        }),
        value: value,
        isValid: isValid,
        reset,
      }),
    [value]
  );

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
    <div className={styles.container}>
      <div
        className={`${styles.input} ${props.className} ${
          props.input.type === "checkbox" ? styles.space : ""
        } `}
      >
        {props.input.position === "LEFT" && label}
        {props.input.type !== "dropdown" ? (
          <input
            ref={ref}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
            value={value}
            {...props.input}
            className={`${
              props.input.type !== "checkbox" ? styles.field : styles.checkbox
            } ${hasError ? styles.invalid : ""}`}
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
      <FormInputInfo
        input={{
          type: props.input.type,
          ...(props.input.type === "password" && {
            password_input: props.input.password_input,
          }),
          error: hasError,
          value: value,
        }}
      />
    </div>
  );
});

export default FormInput;
