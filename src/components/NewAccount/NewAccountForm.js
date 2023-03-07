import React from "react";
import styles from "./NewAccountForm.module.scss";
import AccFormInput from "../UI/inputs/form-inputs/AccFormInput";

const NewAccountForm = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Create New Customer Account</h1>
        <div className={styles.border}>
          <form className={styles.form}>
            <h2>PERSONAL INFORMATION</h2>
            <AccFormInput
              input={{
                id: "1",
                type: "text",
                label: "First Name *",
                position: "LEFT",
              }}
            />
            <AccFormInput
              input={{
                id: "2",
                type: "text",
                label: "Last name *",
                position: "LEFT",
              }}
            />
            <AccFormInput
              input={{
                id: "3",
                type: "checkbox",
                label: "Sign Up for Newsletter",
                position: "RIGHT",
              }}
            />

            <h2>SIGN UP FOR NEWSLETTER</h2>

            <AccFormInput
              input={{
                id: "4",
                type: "email",
                label: "Email *",
                position: "LEFT",
                placeholder: "ante.borovina@example.com",
              }}
            />
            <AccFormInput
              input={{
                id: "5",
                type: "password",
                label: "Password *",
                position: "LEFT",
                placeholder: "Password",
              }}
            />
            <AccFormInput
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
