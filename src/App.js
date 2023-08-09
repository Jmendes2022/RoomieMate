import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import ContactUs from "./Pages/ContactUs";
import FindRoommates from "./Pages/FindRoommates";
import Account from "./Pages/Account";
import "./App.css";

export default function App() {
  const [user, setUser] = useState("Jordan");

  function handleSetUser(user) {
    setUser(user);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/About" element={<About user={user} />} />
        <Route path="/Login" element={<Login user={user} handleSetUser={handleSetUser} />} />
        <Route path="/ContactUs" element={<ContactUs user={user} />} />
        <Route path="/FindRoomates" element={<FindRoommates user={user} />} />
        <Route path="/Account" element={<Account user={user} />} />
      </Routes>
    </>
  );
}
