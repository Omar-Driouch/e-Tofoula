import "./App.css";
import Register from "./Components/Register/Register";
import Footer from "./components/Footer/Footer";

import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import CustomizedSteppers from "./Components/Stepper/Step";
import Template from "./components/Game/Template/Template";
import Home from "./Components/Home/Home";
import About from "./components/About/About";
import { useState } from "react";
import Rights from "./components/Rights/Rights";
import { DataProvider } from "./components/hooks/DataProvider";

function App() {
  const [isNotGaming, setIsNotGaming] = useState(true);
  const hanldesetIsNotGaming = () => {
    setIsNotGaming(false);
  };
  return (
    <>
      <>
        {isNotGaming && <Header />}
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route
              path="/Template"
              element={<Template loadGaming={hanldesetIsNotGaming} />}
            />
            <Route path="/Register" element={<Register />} />
            <Route path="/Steper" element={<CustomizedSteppers />} />

            <Route path="/Activities" element={<></>} />
            <Route path="/Rights" element={<Rights />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </DataProvider>
        {isNotGaming && <Footer />}
      </>
    </>
  );
}

export default App;
