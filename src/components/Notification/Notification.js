import React, {useEffect, useState} from 'react';
import styles from './Notification.module.scss';
import ErrorIcon from "../UI/icons/ErrorIcon";
import SuccessIcon from "../UI/icons/SuccessIcon";
import SuccessCloseIcon from "../UI/icons/SuccessCloseIcon";
import ErrorCloseIcon from "../UI/icons/ErrorCloseIcon";

const Notification = ({message, type, onDismiss}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onDismiss();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onDismiss]);

  return (
    <div className={`${styles.notification} ${styles[type]} ${visible ? styles.show : styles.hide}`}>
      {type === 'success' ? (<SuccessIcon/>) : (<ErrorIcon/>)}
      <div className={styles.message}>{message}</div>
      {type === 'success' ? (<span onClick={() => setVisible(false)}><SuccessCloseIcon/></span>) : (
        <span onClick={() => setVisible(false)}><ErrorCloseIcon/></span>)}
    </div>
  );
};

export default Notification;
