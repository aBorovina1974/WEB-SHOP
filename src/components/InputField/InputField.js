import React from "react";
import styles from "./InputField.module.scss";
import ValidationError from "../ValidationError/ValidationError";

const InputField = ({
  id,
  name,
  label,
  type,
  value,
  onChange,
  error,
  autocomplete,
  required,
  placeholder,
  classField,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div>
          <input
            className={classField ?? styles.field}
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete={autocomplete}
            placeholder={placeholder}
          />
        </div>
      </div>
      <ValidationError error={error} />
    </div>
  );
};

export default InputField;
