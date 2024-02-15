import "./App.css";
import Register from "./Components/Register/Register";
<<<<<<< HEAD
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ShowAnimate from "./Components/Game/Animation/ShowAnimate";
=======
import Footer from "./components/Footer/Footer";


import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import CustomizedSteppers from "./Components/Stepper/Step";
import Template from "./components/Game/Template/Template";
import Home from "./Components/Home/Home";
>>>>>>> 51441946aa43941c35f98fcf3f4a324185e20745


function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Register />} />
          <Route path="/Animation" element={<ShowAnimate />} />
          <Route path="/home" element={<></>} />
          <Route path="/services" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="/about/:id" element={<></>} />
          <Route path="/Activities" element={<></>} />
          <Route path="/Rights" element={<></>} />
          <Route path="/AboutUs" element={<></>} />

=======
          <Route path="/" element={<Template />} />
          <Route path="/services" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="/about/:id" element={<></>} />
          <Route path="/Steper" element={<CustomizedSteppers />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Activities" element={<></>} />
          <Route path="/Rights" element={<></>} />
          <Route path="/AboutUs" element={<></>} />
         
>>>>>>> 51441946aa43941c35f98fcf3f4a324185e20745
        </Routes>
         <Footer /> 
      </>
    </>
  );
}

export default App;
