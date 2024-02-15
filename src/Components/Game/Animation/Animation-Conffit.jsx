import ReactConfetti from "react-confetti";
import { useState } from "react";
import { useEffect } from "react";
const AnimationConffit = ({ Show }) => {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  return (
    <div>
      {Show && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={1000}
          style={{ zIndex: 9, background: "rgba(0, 0, 0, 0.553)" }}
        />
      )}
    </div>
  );
};

export default AnimationConffit;
