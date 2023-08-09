import {Link} from "react-router-dom";
import Button from "../Components/Button";
import Logo from "../Components/Logo";

import "../App.css";

export default function NavBar({user}) {
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
          <Link to={"/Login"}>
            <Button className="Navbtn">Log in</Button>
          </Link>
          <Link to={"/FindRoomates"}>
            <Button className="Navbtn">Find Roommates</Button>
          </Link>
          <Link to={"/ContactUs"}>
            <Button className="Navbtn">Contact Us</Button>
          </Link>
          <Link to={"/About"}>
            <Button className="Navbtn">About</Button>
          </Link>
        </div>
        <div className="welcome-display">
          {user ? (
            <h3>
              Welcome,
              <span> {user}!</span>
            </h3>
          ) : (
            <h3>
              Welcome, <span>Guest!</span>
            </h3>
          )}
        </div>
      </div>
    </>
  );
}