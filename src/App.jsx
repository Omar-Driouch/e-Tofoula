import "./App.css";
import Footer from "./components/Footer/Footer";
import GameContainer from "./components/GameContainer/GameContainer";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";


function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<GameContainer />} />
          <Route path="/home" element={<Home />} />
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
