import "./App.css";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";

import Template from "./Components/Game/Template/Template";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Game" element={<Template />} />
          <Route path="/home" element={<></>} />
          <Route path="/services" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="/about/:id" element={<></>} />
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
