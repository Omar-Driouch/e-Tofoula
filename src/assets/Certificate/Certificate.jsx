import React from "react";
import "./Certificate.scss";

const Certificate = ({ img, fullName }) => {
  return (
    <div style={{ width: "1050px", margin: "0 auto" }}>
      <div className="certificate">
        <h2 className="winner">{fullName} </h2>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Certificate;
