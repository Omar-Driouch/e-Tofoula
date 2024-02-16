import React from "react";
import "./Rights.css";

const Rights = () => {
  return (
    <>
      <div className="contain-me">
        <div className="activities">
          <button>Rights</button>
        </div>
        <div className="img">
          <img className="img1" src="/KID'S RIGHTS schema.png" alt="Image" />
        </div>
        <div className="pdfbtn">
        <a href="../../../public/convention-des-droits-de-lenfant.pdf">
        <button>Download PDF</button>
        </a>
        </div>
      </div>
    </>
  );
};

export default Rights;
