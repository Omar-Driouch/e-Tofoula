<<<<<<< HEAD
import React from 'react';

const Template = () => {
  return (
    <div>
      
    </div>
  );
}
=======
import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./Template.scss";
import PopUp from "./PopUp";
import { images } from "../Template/Data/data.js";
import "./PopUp.scss";

const Template = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [isMinor, setIsMinor] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const [currentImage, setCurrentImage] = useState(0);

  console.log(images[0]);
  return (
    <div className="container-template">
      <div className="container-template-content">
        <div className="images">
          <img src={images[currentImage]} alt="#" />
        </div>
        {isMinor ? (
          <div className="content-template">
            <div className="false-icons" onClick={handleShow}>
              <img src="../../../public/badd.png" />
            </div>
            <div
              className="true-icons"
              onClick={() => {
                setCurrentImage((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                );
              }}
            >
              <img src="../../../public/good.png" />
            </div>
          </div>
        ) : (
          <div className="qcm-container">
            <ul className="qcm-container-content">
              <li className="qcm-container-question">
                <button type="radio">Question 1</button>
              </li>
              <li className="qcm-container-question">
                <button type="radio">Question 2</button>
              </li>
              <li className="qcm-container-question">
                <button type="radio">Question 3</button>
              </li>
              <li className="qcm-container-question">
                <button type="radio">Question 4</button>
              </li>
            </ul>
          </div>
        )}
        <div className="charachter-gender">
          <img src="../../../public/avatarboy.png" />
        </div>
      </div>

      <div>
        <PopUp
          data={"test"}
          show={show}
          handleClose={handleClose}
          imageUrl={"../../../public/foxQuestion.png"}
        />
      </div>
    </div>
  );
};
>>>>>>> 9fbe7617f6e66c2f66cf72b9c29722952e07c48e

export default Template;
