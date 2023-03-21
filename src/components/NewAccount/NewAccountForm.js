import React from "react";
import styles from "./NewAccountForm.module.scss";
import FormInput from "../UI/inputs/FormInput/FormInput";

const NewAccountForm = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Create New Customer Account</h1>
        <div className={styles.border}>
          <form className={styles.form}>
            <h2>PERSONAL INFORMATION</h2>
            <FormInput
              input={{
                id: "1",
                type: "text",
                label: "First Name *",
                position: "LEFT",
              }}
            />
            <FormInput
              input={{
                id: "2",
                type: "text",
                label: "Last name *",
                position: "LEFT",
              }}
            />
            <FormInput
              input={{
                id: "3",
                type: "checkbox",
                label: "Sign Up for Newsletter",
                position: "RIGHT",
              }}
            />

            <h2>SIGN UP FOR NEWSLETTER</h2>

            <FormInput
              input={{
                id: "4",
                type: "email",
                label: "Email *",
                position: "LEFT",
                placeholder: "ante.borovina@example.com",
              }}
            />
            <FormInput
              input={{
                id: "5",
                type: "password",
                label: "Password *",
                position: "LEFT",
                placeholder: "Password",
              }}
            />
            <FormInput
              input={{
                id: "6",
                type: "password",
                label: "Confirm Password *",
                position: "LEFT",
                placeholder: "",
              }}
            />
            <div className={styles.actions}>
              <button type="submit">CREATE NEW ACCOUNT</button>
              <button>BACK</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewAccountForm;
