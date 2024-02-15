import React from "react";
import Modal from "react-bootstrap/Modal";
import "./PopUp.scss";
const PopUp = ({ show, handleClose, data }) => {
  return (
    <>
      <Modal className="modal-transparent" show={show} onHide={handleClose}>
       
      </Modal>
    </>
  );
};

export default PopUp;
