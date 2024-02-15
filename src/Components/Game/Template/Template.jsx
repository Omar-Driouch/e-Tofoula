import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./Template.scss";
import PopUp from "./PopUp";
import { images } from "../Template/Data/data.js";
const Template = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const [currentImage, setCurrentImage] = useState(0);

  console.log(images[0]);
  return (
    <div className="container-template">
      <div className="container-template-ceontent">
        <div className="images">
          <img src={images[currentImage]} alt="#" />
        </div>
        <div className="content-template">
          <div className="false-icons" onClick={handleShow}>
            <FaTimesCircle />
          </div>
          <div
            className="true-icons"
            onClick={() => {
              setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              );
            }}
          >
            <FaCheckCircle />
          </div>
        </div>
      </div>
      <PopUp show={show} handleClose={handleClose} />
    </div>
  );
};

export default Template;
