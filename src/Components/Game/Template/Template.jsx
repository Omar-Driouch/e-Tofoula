import React, { useContext, useEffect, useState } from "react";
import { QuestionsImages, FoxAnswres } from "../Template/Data/data.js";
import PopUp from "./PopUp";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./Template.scss";
import "./PopUp.scss";
import Certificate from "../../../assets/Certificate/Certificate.jsx";
import { DataContext } from "../../hooks/DataProvider.jsx";

const Template = ({ loadGaming }) => {
  const [show, setShow] = useState(false);
  const [isMinor, setIsMinor] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [counter, setCounter] = useState(0);
    const { data, updateData } = useContext(DataContext);
  const [isRightAnswe, setIsRightAnswe] = useState(true);
  const [fullname, setFullname] = useState("");

  const handletheClickAnswwer = (stte) => {
    setIsRightAnswe(stte);
  };
  useEffect(() => {
    setFullname(data);
    loadGaming();
  }, []);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    if (isRightAnswe) {
      setCurrentImage((prev) =>
        prev === QuestionsImages.length - 1 ? 6 : prev + 1
      );
    }
  };

  const handleTheRightImage = (FoxAnswers, trueOrFalse) => {
    let key = "";
    let index = 0;
    console.log("====================================");
    console.log(trueOrFalse);

    for (let item in FoxAnswers) {
      if (currentImage === 0 && item === "foxfamily") {
        if (trueOrFalse) {
          index = 0;
        } else {
          index = 1;
        }
        const answer = FoxAnswers[item];

        return answer[index];
      }
      if (currentImage === 1 && item === "foxdoctor") {
        if (trueOrFalse) {
          index = 0;
        } else {
          index = 1;
        }
        const answer = FoxAnswers[item];

        return answer[index];
      }
      if (currentImage === 2 && item === "foxschool") {
        console.log(currentImage);
        console.log("====================================");
        if (trueOrFalse) {
          index = 0;
        } else {
          index = 1;
        }
        const answer = FoxAnswers[item];

        return answer[index];
      }
      if (currentImage === 3 && item === "foxlabor") {
        console.log(currentImage);

        if (trueOrFalse) {
          index = 1;
        } else {
          index = 0;
        }
        const answer = FoxAnswers[item];

        return answer[index];
      }
      if (currentImage === 4 && item === "foxabuse") {
        console.log(currentImage);

        if (trueOrFalse) {
          index = 1;
        } else {
          index = 0;
        }
        const answer = FoxAnswers[item];

        return answer[index];
      }
    }
  };

  return (
    <div className="container-template">
      {currentImage < 5 ? (
        <div className="container-template-content">
          <div className="game-level">
            <h2>level 1</h2>
          </div>
          <div className="images">
            <img src={QuestionsImages[currentImage]} alt="#" />
          </div>

          <div className="content-template">
            <div className="false-icons" onClick={handleShow}>
              <img
                onClick={() => handletheClickAnswwer(false)}
                src="../../../public/badd.png"
                alt="False Icon"
              />
            </div>
            <div
              className="true-icons"
              onClick={() => {
                handleShow();
              }}
            >
              <img
                onClick={() => handletheClickAnswwer(true)}
                src="../../../public/good.png"
                alt="True Icon"
              />
            </div>
          </div>

          <div className="charachter-gender">
            <img src="../../../public/avatarboy.png" alt="Character Gender" />
          </div>
        </div>
      ) : (
        <>
          <Certificate fullName={fullname} />
        </>
      )}
      <div>
        <PopUp
          FoxAnswres={handleTheRightImage(FoxAnswres, isRightAnswe)}
          show={show}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Template;
