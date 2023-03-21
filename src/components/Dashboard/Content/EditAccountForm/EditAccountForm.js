import React from "react";
import FormInput from "../../../UI/inputs/FormInput/FormInput";
import inputItems from "../../../../data/edit-account.json";
import styles from "./EditAccountForm.module.scss";

const EditAccountForm = (props) => {
  return (
    <>
      <form className={styles.form}>
        <h3 className={styles.title}>Account Information</h3>
        <ul className={styles.inputs}>
          {inputItems &&
            inputItems.map((inputItem, index) => (
              <FormInput
                key={index}
                input={{
                  id: inputItem.id,
                  type: inputItem.type,
                  label: inputItem.label,
                  position: inputItem.position,
                }}
              />
            ))}
        </ul>

        <button className={styles.action}>SAVE</button>
      </form>
    </>
  );
};

export default EditAccountForm;
