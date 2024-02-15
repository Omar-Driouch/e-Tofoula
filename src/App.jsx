import "./App.css";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ShowAnimate from "./Components/Game/Animation/ShowAnimate";


function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Animation" element={<ShowAnimate />} />
          <Route path="/home" element={<></>} />
          <Route path="/services" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="/about/:id" element={<></>} />
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
