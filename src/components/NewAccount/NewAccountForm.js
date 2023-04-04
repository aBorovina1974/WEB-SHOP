import React, { useReducer } from "react";
import styles from "./NewAccountForm.module.scss";
import FormInput from "../UI/inputs/FormInput/FormInput";
import formSections from "../../data/new-account-form.json";
// import useFetch from "../../hooks/useFetch";

const items = [];
const accountFormReducer = (formState, action) => {
  if (action.type === "FILL") {
    if (!items.find((item) => item.id === action.inputItem.id)) {
      items.push(action.inputItem);
    }
    formState.inputItems = items;
    return formState;
  }

  if (action.type === "UPDATE") {
    items[
      formState.inputItems.findIndex((item) => item.id === action.inputItem.id)
    ] = action.inputItem;

    formState.inputItems = items;
    formState.enteredPassword = items.find(
      (item) => item.password_input === "enter"
    ).value;
    formState.confirmPassword = items.find(
      (item) => item.password_input === "confirm"
    ).value;

    if (
      formState.inputItems.every((item) => item.isValid) &&
      formState.enteredPassword === formState.confirmPassword
    ) {
      formState.formIsValid = true;
    } else {
      formState.formIsValid = false;
    }

    return formState;
  }
};

const NewAccountForm = () => {
  const [formState, dispatch] = useReducer(accountFormReducer, {
    inputItems: [],
    enteredPassword: null,
    confirmPassword: null,
    formIsValid: false,
  });

  const onInputHandler = (inputItem) => {
    dispatch({
      type: formState.inputItems.length === 0 ? "FILL" : "UPDATE",
      inputItem: inputItem,
    });
  };

  const createNewAccount = async (formData) => {
    const url =
      "https://web-shop-database-default-rtdb.firebaseio.com/users.json/?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT";
    try {
      let emailExists = false;
      let response = await fetch(url);
      let data = await response.json();
      if (data) {
        emailExists = Object.entries(data).some(
          (user) => user[1].email === formData.inputItems[3].value
        );
      }
      if (emailExists) {
        alert(
          "Failed to create a new user account! The    entered email is already in use!"
        );
      } else {
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.inputItems[0].value,
            last_name: formData.inputItems[1].value,
            newsletter: formData.inputItems[2].value,
            email: formData.inputItems[3].value,
            password: formData.inputItems[4].value,
          }),
        });
        if (response.ok) {
          alert("User account has been successfully created!");
          formState.inputItems.forEach((item) => item.reset());
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formState.formIsValid) {
      return;
    }
    if (formState.formIsValid) {
      const state = formState;
      createNewAccount(state);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create New Customer Account</h1>
      <div className={styles.border}>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <ul className={styles.sections}>
            {formSections &&
              formSections.map((section, index) => (
                <li key={index}>
                  <h2>{section.title}</h2>
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
                          required: inputItem.required,
                          ...(inputItem.placeholder && {
                            placeholder: inputItem.placeholder,
                          }),
                          ...(inputItem.type === "password" && {
                            password_input: inputItem.password_input,
                          }),
                        }}
                        onInput={onInputHandler}
                      />
                    ))}
                  </ul>
                </li>
              ))}
          </ul>

          <div className={styles.actions}>
            <button
              // disabled={formState.formIsValid}
              className={styles.submit}
              formNoValidate={true}
            >
              CREATE NEW ACCOUNT
            </button>
            <button type="button" className={styles.back}>
              BACK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAccountForm;
