import {Link, useNavigate} from "react-router-dom";
import Button from "../Components/Button";
import Logo from "../Components/Logo";
import {PiChatsDuotone} from "react-icons/pi";
import Avatar from "./Avatar";

import "../App.css";

export default function NavBar({user, onHandleSetUser, handleShowMessages, onHandleAvatar, avatar}) {
  const navigate = useNavigate();

  function HandleSetUser() {
    if (user != null) {
      onHandleSetUser(null);
      localStorage.clear();
      navigate("/");
    }
  }

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-btns">
          <Link to={"/"}>
            <Button className="Navbtn">Home</Button>
          </Link>
          <Link to={user ? "/FindRoomates" : "/Login"}>
            <Button className="Navbtn">Find Roommates</Button>
          </Link>
          <Link to={"/ContactUs"}>
            <Button className="Navbtn">Contact Us</Button>
          </Link>
          <Link to={"/About"}>
            <Button className="Navbtn">About</Button>
          </Link>
          {user && (
            <Link to={"/ConnectedRoommates"}>
              <Button className="Navbtn">Connections</Button>
            </Link>
          )}
          <span className="messages-icon" onClick={handleShowMessages}>
            {user && <PiChatsDuotone size={30} />}
          </span>
        </div>
        <div className="welcome-display">
          {user ? (
            <>
              <Avatar className={"avatar-Image"} avatarUrl={avatar} />
              <h3>
                Welcome,
                <span> {user}!</span>
                <span>
                  <Link to={"/Account"}>
                    <span className="accountBtn">[Account]</span>
                  </Link>
                  <Link>
                    <span onClick={HandleSetUser} className="accountBtn">
                      [Logout]
                    </span>
                  </Link>
                </span>
              </h3>
            </>
          ) : (
            <h3>
              Welcome, <span>Guest!</span>
              <Link to={"/Login"}>
                <span className="accountBtn">[Login]</span>
              </Link>
            </h3>
          )}
        </div>
      </div>
    </>
  );
}
