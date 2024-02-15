import "./App.css";
import Register from "./Components/Register/Register";
import Footer from "./components/Footer/Footer";
import Level1 from "./components/Game/Level1/Level1";
import GameContainer from "./components/GameContainer/GameContainer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import CustomizedSteppers from './Components/Stepper/Step';

function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<></>} />
          <Route path="/services" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="/about/:id" element={<></>} />
          <Route path="/Steper" element={<CustomizedSteppers/>} />

        </Routes>
        <Footer />
      </>
    </>
  );
}

export default App;
