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
import DisplayRoommate from "./Pages/DisplayRoommate";

export default function App() {
  const [user, setUser] = useState("");
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
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
    //This is just for testing purposes so that I do not have to keep replacing my Fetch Calls
    localStorage.setItem("Local", true);

    setUser(localStorage.getItem("Username"));
    setAvatar(localStorage.getItem("AvatarUrl"));
  }, []);

  function handleShowMessages() {
    setIsMessagesVisible(!isMessagesVisible);
  }

  function handleSetAvatar() {
    setAvatar(localStorage.getItem("AvatarUrl"));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home onHandleAvatar={handleSetAvatar} avatar={avatar} user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/About" element={<About onHandleAvatar={handleSetAvatar} avatar={avatar} user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/Login" element={<Login onHandleAvatar={handleSetAvatar} user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/ContactUs" element={<ContactUs onHandleAvatar={handleSetAvatar} avatar={avatar} user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/FindRoomates" element={<FindRoommates onHandleAvatar={handleSetAvatar} avatar={avatar} user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/Account" element={<Account onHandleAvatar={handleSetAvatar} avatar={avatar} user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/ConnectedRoommates" element={<ConnectedRoommates onHandleAvatar={handleSetAvatar} avatar={avatar} user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
        <Route path="/DisplayRoommate/:id" element={<DisplayRoommate onHandleAvatar={handleSetAvatar} avatar={avatar} user={user} onHandleSetUser={handleSetUser} handleShowMessages={handleShowMessages} />} />
      </Routes>
      {isMessagesVisible && <Messages />}
    </>
  );
}
