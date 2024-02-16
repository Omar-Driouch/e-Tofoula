import { useEffect, useState } from "react";
import "./Template.scss";
import PopUp from "./PopUp";
import { images } from "../Template/Data/data.js";
import "./PopUp.scss";

const Template = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [isKids, setisKids] = useState("");
  const [Sex, setSex] = useState("");
  const [Age, setAge] = useState();
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    const storedData = localStorage.getItem("myKid");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log(parsedData);
    }
  }, []);
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="container-template">
      <div className="container-template-content">
        <div className="images">
          <img src={images[currentImage]} alt="#" />
        </div>
        {isKids ? (
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
          <button>
            fjfhj
          </button>
          {/* Sex */}
          {Sex === "Male" ? (
            <img src="../../../public/avatarboy.png" />
          ) : (
            <img src="../../../public/avatargirl.png" />
          )}
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
