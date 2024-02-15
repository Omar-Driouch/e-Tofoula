import { useState } from "react";
import "./Template.scss";
import PopUp from "./PopUp";
import { images } from "../Template/Data/data.js";
import "./PopUp.scss";

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

export default Template;
