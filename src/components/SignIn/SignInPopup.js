import React, {useState} from 'react';
import {SignIn} from "./SignIn";
import {Modal} from "../Modal/Modal";
import {useNavigate} from "react-router-dom";

export function SignInPopup() {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();


  function handleCloseModal() {
    setShowModal(false)
    navigate('/')
  }

  return (
    <Modal
      isOpen={showModal}
      closeHandler={handleCloseModal}
      modalContent={<SignIn handleClose={handleCloseModal}/>}
    />
  );
}