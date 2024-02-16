import Button from "@mui/material/Button";
import { useState } from "react";
import AnimationConffit from "./Animation/Animation-Conffit";
const IndexPart = () => {
  const [Show, setShow] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setShow(!Show);
        }}
        color="primary"
      >
        Click to Show Animation
      </Button>
      <AnimationConffit {...{ Show }} />
    </div>
  );
};

export default IndexPart;
