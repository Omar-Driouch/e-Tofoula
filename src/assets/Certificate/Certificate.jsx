import "./Certificate.scss";
import Certiimage from "../../assets/Certificatesvg.svg";
import AnimationConffit from "./AnimationConffit";
import { useState } from "react";
import { useEffect } from "react";

const Certificate = ({ fullName }) => {
  const [ShowAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 5000);
  }, []);
  return (
    <div style={{ width: "1050px", margin: "0 auto" }}>
      <AnimationConffit Show={ShowAnimation} />
      <div className="certificate">
        <h2 className="winner">{fullName} </h2>
        <img src={Certiimage} alt="" />
      </div>
    </div>
  );
};

export default Certificate;
