import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import ContactUs from "./Pages/ContactUs";
import FindRoommates from "./Pages/FindRoommates";
import Account from "./Pages/Account";
import Messages from "./Components/Messages";
import "./App.css";
import CreateAccount from "./Pages/CreateAccount";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState("");
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);

  function handleSetUser(user) {
    setUser(user);
    if (!user) {
      window.location.href = "/";
    }
  }

  function handleShowMessages() {
    setIsMessagesVisible(!isMessagesVisible);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/About" element={<About user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/Login" element={<Login user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/ContactUs" element={<ContactUs user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/FindRoomates" element={<FindRoommates user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/Account" element={<Account user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
      {isMessagesVisible && <Messages />}
    </>
  );
}
