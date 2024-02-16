import React from "react";
import "./Certificate.scss";
import Certiimage from "../../assets/Certificatesvg.svg";

const Certificate = ({ fullName }) => {
  return (
    <div style={{ width: "1050px", margin: "0 auto" }}>
      
      <div className="certificate">
        <h2 className="winner">{fullName} </h2>
        <img src={Certiimage} alt="" />
      </div>
    </div>
  );
};

export default Certificate;
