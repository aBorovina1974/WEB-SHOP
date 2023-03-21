import React, { useState } from "react";
import FormInput from "../../../UI/inputs/FormInput/FormInput";
import formSections from "../../../../data/add-new-address.json";
import styles from "./AddNewAddressForm.module.scss";

const AddNewAddressForm = () => {
  const [relatedOptionsIndex, setRelatedOptionsIndex] = useState();

  const optionsHandler = (index) => {
    setRelatedOptionsIndex((prevIndex) => (prevIndex = index));
  };

  return (
    <form className={styles.form}>
      <ul>
        {formSections &&
          formSections.map((section, index) => (
            <li key={index}>
              <h2 className={styles.title}>{section.title}</h2>
              <ul>
                {section.inputs.map((inputItem) => (
                  <FormInput
                    className={styles.input}
                    key={inputItem.id}
                    input={{
                      id: inputItem.id,
                      type: inputItem.type,
                      label: inputItem.label,
                      position: inputItem.position,
                    }}
                    action={inputItem.action}
                    related={inputItem.related}
                    options={
                      !inputItem.related
                        ? inputItem.options
                        : inputItem.options[relatedOptionsIndex]
                    }
                    onRelated={optionsHandler}
                  />
                ))}
              </ul>
            </li>
          ))}
        <button type="submit" className={styles.action}>
          SAVE ADDRESS
        </button>
      </ul>
    </form>
  );
};

export default AddNewAddressForm;
