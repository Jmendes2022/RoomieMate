import {Route, Routes, useNavigate} from "react-router-dom";
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
import ConnectedRoommates from "./Pages/ConnectedRoommates";

export default function App() {
  const [user, setUser] = useState("");
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);

  const navigate = useNavigate();

  function handleSetUser(user) {
    if (user == null) {
      navigate("/");
      setUser(null);
    } else {
      setUser(user);
    }
  }

  useEffect(() => {
    setUser(localStorage.getItem("Username"));
  }, []);

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
        <Route path="/ConnectedRoommates" element={<ConnectedRoommates user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
      </Routes>
      {isMessagesVisible && <Messages />}
    </>
  );
}
