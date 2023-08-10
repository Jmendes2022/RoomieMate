import {Link} from "react-router-dom";
import Button from "../Components/Button";
import Logo from "../Components/Logo";
import {PiChatsDuotone} from "react-icons/pi";

import "../App.css";

export default function NavBar({user, onHandleSetUser, handleShowMessages}) {
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
          <span className="messages-icon" onClick={handleShowMessages}>
            {user && <PiChatsDuotone size={30} />}
          </span>
        </div>
        <div className="welcome-display">
          {user ? (
            <h3>
              Welcome,
              <span> {user}!</span>
              <span>
                <Link to={"/Account"}>
                  <span className="accountBtn">[Account]</span>
                </Link>
                <Link>
                  <span onClick={() => onHandleSetUser(null)} className="accountBtn">
                    [Logout]
                  </span>
                </Link>
              </span>
            </h3>
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
