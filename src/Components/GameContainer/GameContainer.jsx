
import "./GameContainer.scss";
import "../../assets/Certificate/Certificate.scss";
import certificate from "../../assets/Certificate.svg";
import Certificate from "../../assets/Certificate/Certificate";
const GameContainer = () => {
  return (
    <div className="game-container">
      <Certificate img={certificate} fullName={"Othmane   Benraho"} />
    </div>
  );
};

export default GameContainer;
