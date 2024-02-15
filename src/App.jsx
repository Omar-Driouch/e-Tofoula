import "./App.css";
import Register from "./Components/Register/Register";
import Footer from "./components/Footer/Footer";

import GameContainer from "./components/GameContainer/GameContainer";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import CustomizedSteppers from "./Components/Stepper/Step";

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
          <Route path="/Steper" element={<CustomizedSteppers />} />
          <Route path="/Activities" element={<></>} />
          <Route path="/Rights" element={<></>} />
          <Route path="/AboutUs" element={<></>} />
        </Routes>
        {/* <Footer /> */}
      </>
    </>
  );
}

export default App;
