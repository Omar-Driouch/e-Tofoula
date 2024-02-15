import "./App.css";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Template from "./Components/Game/Template/Template";
import Home from "./Components/Home/Home";
import CustomizedSteppers from "./Components/Stepper/Step";
import AnimationConffit from "./Components/Game/Animation/Animation-Conffit";
import IndexPart from "./Components/Game/indexPart";

function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/animate" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="/about/:id" element={<></>} />
          <Route path="/Steper" element={<CustomizedSteppers />} />
          <Route path="/Activities" element={<></>} />
          <Route path="/Rights" element={<></>} />
          <Route path="/AboutUs" element={<></>} />
        </Routes>
         <Footer /> 
      </>
    </>
  );
}

export default App;
