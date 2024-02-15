import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const PopUp = ({show , handleClose}) => {
  return (
    <>
    <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal> 
    </>
   )
}

export default PopUp