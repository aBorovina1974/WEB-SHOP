import SyncLoader from "react-spinners/SyncLoader";
import React from "react";
import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <SyncLoader color={'#000000'}/>
    </div>
  )
}

export default Spinner;