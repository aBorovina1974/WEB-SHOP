import React from 'react';
import styles from "./CheckBoxField.module.scss";

const CheckBoxField = ({id, name, label, type, checked, onChange, error}) => {
  return (
    <div className={styles['check-box']}>
      <label htmlFor={id}>{label}:</label>
      <input type={type} id={id} name={name} checked={checked} onChange={onChange}/>
      {error && <span>{error}</span>}
    </div>
  );
};

export default CheckBoxField;