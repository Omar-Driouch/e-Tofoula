import "./App.css";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import CustomizedSteppers from "./Components/Stepper/Step";
import Template from "./Components/Game/Template/Template";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { useContext, useEffect, useState } from "react";
import Rights from "./Components/Rights/Rights";
import { DataContext, DataProvider } from "./Components/hooks/DataProvider";
import Activities from "./Components/Activities/Activities";

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

            <Route path="/Activities" element={<Activities />} />
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
