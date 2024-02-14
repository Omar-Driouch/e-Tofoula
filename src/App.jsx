import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     
        <>
          <Header />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/home" element={<></>} />
            <Route path="/services" element={<></>} />
            <Route path="/contact" element={<></>} />
            <Route path="/about/:id" element={<></>} />
          </Routes>
        </>
    
    </>
  );
}

export default App;
