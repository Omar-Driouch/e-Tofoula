import "./App.css";
import Register from "./Components/Register/Register";
import Footer from "./components/Footer/Footer";


import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import CustomizedSteppers from "./Components/Stepper/Step";
import Template from "./components/Game/Template/Template";
import Home from "./Components/Home/Home";


function App() {
  return (
    <>
      <>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Template />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/contact" element={<></>} />
          <Route path="/about/:id" element={<></>} />
          <Route path="/Steper" element={<CustomizedSteppers />} />
          <Route path="/home" element={<Home />} />
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
