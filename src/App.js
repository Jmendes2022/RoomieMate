import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}
