import React from "react";
import Modal from "react-bootstrap/Modal";
import "./PopUp.scss";
const PopUp = ({ show, handleClose, FoxAnswres }) => {

  return (
    <>
      <Modal
        style={{ backgroundImage: `url(${FoxAnswres})` }}
        className="modal-transparent"
        show={show}
        onHide={handleClose}
      ></Modal>
    </>
  );
};

export default PopUp;
