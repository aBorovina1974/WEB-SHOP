import {useState} from "react";
import styles from "../Checkbox/Checkbox.module.scss";

const Checkbox = ({label}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles['check-box']}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;