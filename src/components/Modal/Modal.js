import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

export const Modal = ({ isOpen, closeHandler, modalContent, menuRef }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeHandler(false);
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeHandler]);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className={styles["modal__container"]}>
      <div className={styles["modal__content"]} ref={modalRef}>
        {modalContent}
      </div>
    </div>
  );
};
